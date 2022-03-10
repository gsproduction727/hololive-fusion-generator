import "./style.css";
import { backgroundImages } from "./backgroundImages.js";
import { getRandomInt, getRandomIntUnique, mod } from "./util.js";
import { getFullNameStringById, getFusionStringByIds } from "./name.js";
import {
    calculateTalentVariationsEnabled,
    getTalentById,
    getTalentCountEnabled,
    getTalentIdsEnabled,
    getTalentCategory,
    getTalentIdsEnabledFromCategory
} from "./talent.js";
import { drawFusion } from "./draw.mjs";

const $ = document.querySelector.bind(document);
const dropdownModifierSelectors = [
    ".talent-dropdown",
    ".talent-select-button-imgs",
    ".talent-select-name",
    ".talent-select-image"
];
const talentCategories = ["All", "JP0"];
let curCategoryIndex = 0;
const talentIds = getTalentIdsEnabledFromCategory(talentCategories[curCategoryIndex]);
const talentSelectContainers = [];
const talentEntries = [];
const talentIdsInCategories = [];
const talentIndexes = [...Array(talentIds.length).keys()];
let backgroundIndex;
let isCategoryShown = false;
let isHalfCategoryAlrDone = false;

// ------------------------------------------------------------------
// GENERAL
// ------------------------------------------------------------------

function keepTalentIndexWithinBounds(talentIndex) {
    return mod(talentIndex, talentIds.length);
}

function cloneNode(template) {
    return template.content.cloneNode(true);
}

function resetCSSAnimation(element) {
    element.style.animation = "none";
    element.offsetHeight; // trigger reflow
    element.style.animation = null;
}

// ------------------------------------------------------------------
// TALENT SELECT, TALENT RESULT
// ------------------------------------------------------------------

function createAndInsertTalentSelectContainerElements() {
    const template = $(".template-talent-select");
    for (let i = 1; i <= 2; i++) {
        const clone = cloneNode(template);
        clone.querySelector(".talent-select-container").classList.add(`talent-select-container-${i}`);
        clone.querySelector(".talent-select-box").classList.add(`talent-select-box-${i}`);
        clone.querySelector(".talent-dropdown").classList.add(`talent-dropdown-${i}`);
        $(".main").appendChild(clone);
    }
}

function getTalentSelectContainerTalentIndex(talentSelectContainer) {
    return parseInt(talentSelectContainer.dataset.talentIndex);
}

function setTalentSelectContainerTalentIndex(talentSelectContainer, talentIndex) {
    talentSelectContainer.dataset.talentIndex = talentIndex;
}

function getTalentSelectContainerTalentIds() {
    return [
        talentIds[getTalentSelectContainerTalentIndex(talentSelectContainers[0])],
        talentIds[getTalentSelectContainerTalentIndex(talentSelectContainers[1])]
    ];
}

function getOtherTalentSelectContainer(talentSelectContainer) {
    if (talentSelectContainer === talentSelectContainers[0])
        return talentSelectContainers[1];
    return talentSelectContainers[0];
}

function getTalentSelectContainerFromChild(element) {
    return element.closest(".talent-select-container");
}

function talentPrevious(talentSelectContainer) {
    setTalentSelectContainerTalentIndex(
        talentSelectContainer,
        keepTalentIndexWithinBounds(
            getTalentSelectContainerTalentIndex(talentSelectContainer) - 1
        )
    );
    update();
}

function talentNext(talentSelectContainer) {
    setTalentSelectContainerTalentIndex(
        talentSelectContainer,
        keepTalentIndexWithinBounds(
            getTalentSelectContainerTalentIndex(talentSelectContainer) + 1
        )
    );
    update();
}

function onClickTalentPrevious(event) {
    talentPrevious(getTalentSelectContainerFromChild(event.target));
}

function onClickTalentNext(event) {
    talentNext(getTalentSelectContainerFromChild(event.target));
}

function talentSelectContainerRandomize(talentSelectContainer) {
    if (talentIds.length <= 1) return;
    const talentIndex = getTalentSelectContainerTalentIndex(talentSelectContainer);
    let newTalentIndex;
    if (talentIds.length === 2) {
        newTalentIndex = keepTalentIndexWithinBounds(talentIndex + 1);
    } else {
        const otherTalentIndex = getTalentSelectContainerTalentIndex(
            getOtherTalentSelectContainer(talentSelectContainer)
        );
        newTalentIndex = getRandomIntUnique(talentIds.length, [talentIndex, otherTalentIndex]);
    }
    setTalentSelectContainerTalentIndex(talentSelectContainer, newTalentIndex);
    update();
}

function onClickTalentRandom(event) {
    const talentSelectContainer = getTalentSelectContainerFromChild(event.target);
    talentSelectContainerRandomize(talentSelectContainer);
}

function onClickRandomBoth() {
    if (talentIds.length <= 1) return;
    const oldTalentIndex1 = getTalentSelectContainerTalentIndex(talentSelectContainers[0]);
    const newTalentIndex1 = getRandomIntUnique(talentIds.length, oldTalentIndex1);
    const oldTalentIndex2 = getTalentSelectContainerTalentIndex(talentSelectContainers[1]);
    let newTalentIndex2 = oldTalentIndex2;
    if (talentIds.length === 2) {
        newTalentIndex2 = keepTalentIndexWithinBounds(newTalentIndex1 + 1);
    } else {
        newTalentIndex2 = getRandomIntUnique(talentIds.length, [oldTalentIndex2, newTalentIndex1]);
    }
    setTalentSelectContainerTalentIndex(talentSelectContainers[0], newTalentIndex1);
    setTalentSelectContainerTalentIndex(talentSelectContainers[1], newTalentIndex2);
    update();
}

function onClickSwap() {
    const talentIndex1 = getTalentSelectContainerTalentIndex(talentSelectContainers[0]);
    const talentIndex2 = getTalentSelectContainerTalentIndex(talentSelectContainers[1]);
    setTalentSelectContainerTalentIndex(talentSelectContainers[0], talentIndex2);
    setTalentSelectContainerTalentIndex(talentSelectContainers[1], talentIndex1);
    update();
}

function initTalentSelectContainers() {
    const talentIndex = getRandomInt(talentIds.length);
    for (let i = 0; i < 2; i++) {
        const talentSelectContainer = $(`.talent-select-container-${i+1}`);
        setTalentSelectContainerTalentIndex(talentSelectContainer, talentIndex);

        talentSelectContainer.querySelector(".talent-select-image").onclick = onClickTalentDropdown;
        talentSelectContainer.querySelector(".talent-select-name__name").onclick = onClickTalentDropdown;
        talentSelectContainer.querySelector(".button-img-up").onclick = onClickTalentPrevious;
        talentSelectContainer.querySelector(".button-img-down").onclick = onClickTalentNext;
        talentSelectContainer.querySelector(".button-img-random").onclick = onClickTalentRandom;

        talentSelectContainers[i] = talentSelectContainer;
    }
}

function initTalentSelect() {
    createAndInsertTalentSelectContainerElements();
    initTalentSelectContainers();
    initDropdowns();
}

function initResult() {
    const resultContainer = $(".result-box");
    resultContainer.querySelector(".button-img-random").onclick = onClickRandomBoth;
    resultContainer.querySelector(".button-img-swap").onclick = onClickSwap;
}

function updateTalentSelectImage(talentSelectContainer) {
    const talentId = talentIds[getTalentSelectContainerTalentIndex(talentSelectContainer)];
    talentSelectContainer.querySelector(".talent-select-image")
        .style.setProperty(
            "--image-url",
            `url(images/talents/${talentId}-medium.webp)`
        );
}

function updateTalentSelectName(talentSelectContainer) {
    talentSelectContainer.querySelector(".talent-select-name__name").innerHTML = getFullNameStringById(
        talentIds[getTalentSelectContainerTalentIndex(talentSelectContainer)]
    );
}

function updateTalentSelectContainer(talentSelectContainer) {
    updateTalentSelectImage(talentSelectContainer);
    updateTalentSelectName(talentSelectContainer);
    updateTalentSelectDropdown(talentSelectContainer);
}

function updateTalentSelectContainers() {
    for (const talentSelectContainer of talentSelectContainers) {
        updateTalentSelectContainer(talentSelectContainer);
    }
}

function updateResultImage() {
    const resultCanvas = $(".result-canvas");
    resetCSSAnimation(resultCanvas);
    drawFusion(
        resultCanvas,
        ...getTalentSelectContainerTalentIds()
    );
}

function updateResultName() {
    const [talentId1, talentId2] = getTalentSelectContainerTalentIds();
    $(".result-name").innerHTML = getFusionStringByIds(talentId1, talentId2);
}

function updateResult() {
    updateResultName();
    updateResultImage();
}

function update() {
    updateTalentSelectContainers();
    updateResult();
}

// ------------------------------------------------------------------
// TALENT SELECT DROPDOWN
// ------------------------------------------------------------------

function getDropdownEntry(dropdownElement, talentIndex) {
    return dropdownElement.querySelector(`[data-talent-index="${talentIndex}"]`);
}

function highlightDropdownEntry(dropdownEntry) {
    dropdownEntry.classList.add("talent-dropdown-entries__entry--highlighted");
}

function unhighlightDropdownEntries(dropdownElement) {
    for (const entry of dropdownElement.querySelectorAll(".talent-dropdown-entries__entry")) {
        entry.classList.remove("talent-dropdown-entries__entry--highlighted");
    }
}

function scrollToDropdownEntry(dropdownEntry) {
    const dropdownEntriesContainer = dropdownEntry.closest(".talent-dropdown-entries");
    const position =
        dropdownEntry.offsetTop -
        dropdownEntriesContainer.offsetHeight / 2 +
        dropdownEntry.offsetHeight / 2;
    dropdownEntriesContainer.scrollTop = position;
}

function addDropdownModifierToElements(talentSelectContainer) {
    for (const selector of dropdownModifierSelectors) {
        talentSelectContainer.querySelector(selector).classList.add("dropdown-visible");
    }
}

function getDropdownEntryOfCurrentlySelectedTalent(dropdownElement) {
    return getDropdownEntry(
        dropdownElement,
        getTalentSelectContainerTalentIndex(
            getTalentSelectContainerFromChild(dropdownElement)
        )
    );
}

function showDropdown(talentSelectContainer) {
    addDropdownModifierToElements(talentSelectContainer);
    scrollToDropdownEntry(
        getDropdownEntryOfCurrentlySelectedTalent(
            talentSelectContainer.querySelector(".talent-dropdown")
        )
    );
}

function removeDropdownModifierFromElements(talentSelectContainer) {
    for (const selector of dropdownModifierSelectors) {
        talentSelectContainer.querySelector(selector).classList.remove("dropdown-visible");
    }
}

function hideDropdown(talentSelectContainer) {
    removeDropdownModifierFromElements(talentSelectContainer);
}

function onClickDropdownEntry(event) {
    const entry = event.currentTarget; // not .target, might have clicked on child element (image, name)
    const talentSelectContainer = getTalentSelectContainerFromChild(entry);

    isCategoryShown = false;

    setTalentSelectContainerTalentIndex(
        talentSelectContainer,
        entry.dataset.talentIndex
    );

    let talentDropdownEntry = talentSelectContainer.querySelector(".talent-dropdown-entries");
    talentDropdownEntry.style.display = "none";

    let talentDropdownCategory = talentSelectContainer.querySelector(".talent-dropdown-categories");
    talentDropdownCategory.style.display = null;

    hideDropdown(talentSelectContainer);
    update();
}

function onClickDropdownCategory(event) {
    const entry = event.currentTarget; // not .target, might have clicked on child element (image, name)
    const talentSelectContainer = getTalentSelectContainerFromChild(entry);

    isCategoryShown = true;

    curCategoryIndex = entry.dataset.categoryIndex;

    const talentDropdownEntry = talentSelectContainer.querySelector(".talent-dropdown-entries");
    talentDropdownEntry.style.display = null;

    const talentDropdownCategory = talentSelectContainer.querySelector(".talent-dropdown-categories");
    talentDropdownCategory.style.display = "none";

    const talentIdsInThisCategory = talentIdsInCategories[curCategoryIndex];
    const talentsGlobalIndexInThisCategory = [];

    for (let i = 0; i < talentIdsInThisCategory.length; i++) {
        talentsGlobalIndexInThisCategory.push(talentIds.findIndex(element => element === talentIdsInThisCategory[i]));
    }

    const talentDropdownEntries = talentDropdownEntry.children;

    for (let i = 0; i < talentIndexes.length; i++) {
        if (talentsGlobalIndexInThisCategory.includes(i)) {
            talentDropdownEntries[i].style.display = null;
        } else {
            talentDropdownEntries[i].style.display = "none";
        }
    }

    // showDropdown(talentSelectContainer);
}

function isDropdownVisible(talentSelectContainer) {
    return talentSelectContainer.querySelector(".talent-dropdown").classList.contains("dropdown-visible");
}

function onClickTalentDropdown(event) {
    const talentSelectContainer = getTalentSelectContainerFromChild(event.target);
    if (isDropdownVisible(talentSelectContainer)) return;
    showDropdown(talentSelectContainer);
    event.ifDropdownElementJustShown = talentSelectContainer.querySelector(".talent-dropdown");
}

function addDropdownEntry(dropdownElement, talentIndex, id) {
    const entry = cloneNode($(".template-talent-dropdown-entry"));
    entry.querySelector(".talent-dropdown-entries__entry__image").style.setProperty("--image-url", `url(images/talents/${id}-small.webp)`);
    const fullName = getFullNameStringById(id);
    entry.querySelector(".talent-dropdown-entries__entry__name").innerHTML = fullName;

    const talentDropDownEntry = dropdownElement.querySelector(".talent-dropdown-entries");
    talentDropDownEntry.style.display = "none";

    talentEntries.push(entry)
    talentDropDownEntry.appendChild(entry);

    /* because entry is of type DocumentFragment things such as setAttribute(),
       dataset and events can't be used on it */
    const appendedEntry = talentDropDownEntry.lastElementChild;
    appendedEntry.dataset.talentIndex = talentIndex;
    appendedEntry.onclick = onClickDropdownEntry;
    appendedEntry.onmouseup = onClickDropdownEntry;
}

function addDropdownCategory(dropdownElement, categoryIndex, categoryName) {
    const entry = cloneNode($(".template-talent-dropdown-category"));
    entry.querySelector(".talent-dropdown-category__entry").innerHTML = categoryName;

    const talentDropDownEntry = dropdownElement.querySelector(".talent-dropdown-categories");
    talentDropDownEntry.appendChild(entry);


    /* because entry is of type DocumentFragment things such as setAttribute(),
       dataset and events can't be used on it */
    const appendedEntry = talentDropDownEntry.lastElementChild;
    appendedEntry.dataset.categoryIndex = categoryIndex;
    appendedEntry.onclick = onClickDropdownCategory;
    appendedEntry.onmouseup = onClickDropdownCategory;
}

function addEnabledTalentsToDropdown(dropdownElement) {
    for (let i = 0; i < talentIds.length; i++) {
        addDropdownEntry(dropdownElement, i, talentIds[i]);
    }
    for (let i = 0; i < talentCategories.length; i++) {
        addDropdownCategory(dropdownElement, i, talentCategories[i]);

        let talentIdsInThisCategory = [];
        for (let j = 0; j < talentIds.length; j++) {
            if (getTalentCategory(getTalentById(talentIds[j])).includes(talentCategories[i])) {
                talentIdsInThisCategory.push(talentIds[j]);
            }
        }

        if (!isHalfCategoryAlrDone) {
            talentIdsInCategories.push(talentIdsInThisCategory);
            if (talentIdsInCategories.length > talentCategories.length) {
                isHalfCategoryAlrDone = true;
            }
        }
    }
}

function onClickOutsideDropdown(event, dropdownElement) {
    if (event.ifDropdownElementJustShown === dropdownElement) return;
    if (isCategoryShown) return;
    hideDropdown(getTalentSelectContainerFromChild(dropdownElement));
}

function onKeydownDropdown(event, dropdownElement) {
    const talentSelectContainer = getTalentSelectContainerFromChild(dropdownElement);
    if (!isDropdownVisible(talentSelectContainer)) return;

    const keyFunctions = {
        "ArrowUp": () => {
            talentPrevious(talentSelectContainer);
        },

        "ArrowDown": () => {
            talentNext(talentSelectContainer);
        },

        "Enter": () => {
            hideDropdown(talentSelectContainer);
        }
    };

    if (keyFunctions[event.key]) {
        keyFunctions[event.key]();
        event.preventDefault();
    }
}

function initDropdowns() {
    for (const talentSelectContainer of talentSelectContainers) {
        const dropdownElement = talentSelectContainer.querySelector(".talent-dropdown");
        addEnabledTalentsToDropdown(dropdownElement);
        document.addEventListener("click", (event) => {
            onClickOutsideDropdown(event, dropdownElement);
        });
        document.addEventListener("keydown", (event) => {
            onKeydownDropdown(event, dropdownElement);
        });
    }
}

function updateTalentSelectDropdown(talentSelectContainer) {
    unhighlightDropdownEntries(talentSelectContainer.querySelector(".talent-dropdown"));
    const entryOfCurrentTalent = getDropdownEntryOfCurrentlySelectedTalent(talentSelectContainer);
    highlightDropdownEntry(entryOfCurrentTalent);
    scrollToDropdownEntry(entryOfCurrentTalent);
}

// ------------------------------------------------------------------
// BACKGROUND
// ------------------------------------------------------------------

function deleteSavedBackgroundIndex() {
    localStorage.removeItem("backgroundIndex");
}

function setBackground(index) {
    backgroundIndex = index;
    $(".background").style.setProperty("--image-url", `url(images/backgrounds/${backgroundImages[index]})`);
}

function setBackgroundRandom() {
    setBackground(getRandomInt(backgroundImages.length));
    deleteSavedBackgroundIndex();
}

function setBackgroundRandomDifferent() {
    const newBackgroundIndex = getRandomIntUnique(backgroundImages.length, backgroundIndex);
    setBackground(newBackgroundIndex);
    deleteSavedBackgroundIndex();
}

function saveCurrentBackgroundIndex() {
    localStorage.setItem("backgroundIndex", backgroundIndex);
}

function loadSavedBackgroundIndex() {
    const index = localStorage.getItem("backgroundIndex");
    if (typeof index === "string" && index.match(/^\d+/))
        return parseInt(index);
}

function keepBackgroundIndexWithinBounds(index) {
    return mod(index, backgroundImages.length);
}

function isBackgroundIndexValid(index) {
    if (typeof index !== "number" || index < 0 || index >= backgroundImages.length)
        return false;
    return true;
}

function cycleBackgroundForwards() {
    backgroundIndex = keepBackgroundIndexWithinBounds(++backgroundIndex);
    setBackground(backgroundIndex);
    saveCurrentBackgroundIndex(backgroundIndex);
}

function cycleBackgroundBackwards() {
    backgroundIndex = keepBackgroundIndexWithinBounds(--backgroundIndex);
    setBackground(backgroundIndex);
    saveCurrentBackgroundIndex(backgroundIndex);
}

function decideBackground() {
    const saved = loadSavedBackgroundIndex();
    if (!isBackgroundIndexValid(saved))
        setBackgroundRandom();
    else
        setBackground(saved);
}

// ------------------------------------------------------------------
// INFO
// ------------------------------------------------------------------

function showInfo() {
    $(".info").classList.remove("info--out");
    $(".info").classList.add("info--in");
}

function hideInfo() {
    $(".info").classList.remove("info--in");
    $(".info").classList.add("info--out");
}

function initInfo() {
    const classList = $(".info").classList;

    $(".info-button").onclick = (event) => {
        if (classList.contains("info--in")) return;
        showInfo();
        event.stopPropagation();
    };

    window.onkeydown = (event) => {
        if (classList.contains("info--in") && event.key === "Escape") {
            hideInfo();
        }
    };

    window.onclick = () => {
        if (!classList.contains("info--in")) return;
        hideInfo();
    };

    $(".info__close").onclick = () => {
        hideInfo();
    };

    $(".info").onclick = (event) => {
        event.stopPropagation();
    };

    $(".background-forwards").onclick = () => cycleBackgroundForwards();
    $(".background-backwards").onclick = () => cycleBackgroundBackwards();
    $(".background-random").onclick = () => setBackgroundRandomDifferent();
    $(".current-progress").innerHTML = getTalentCountEnabled();
    $(".possible-variations").innerHTML = calculateTalentVariationsEnabled();
}

// ------------------------------------------------------------------
// MAIN
// ------------------------------------------------------------------

function main() {
    initTalentSelect();
    initResult();
    update();
    decideBackground();
    initInfo();
}

main();