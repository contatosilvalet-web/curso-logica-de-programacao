const lunches = [];
function addLunchToEnd(menu, lunchItem) {
  menu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return menu;
}

function addLunchToStart(menu, lunchItem) {
  menu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return menu;
}

function removeLastLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = menu.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return menu;
}

function removeFirstLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = menu.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return menu;
}

function getRandomLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const randomItem = menu[randomIndex];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

function showLunchMenu(menu) {
  if (menu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${menu.join(", ")}`);
  }
}