let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}

function logout() {
  const confirmed = confirm("Are you sure you want to log out?");
  if (confirmed) {
    window.location.href = "index.html";
  } else {
    return false;
  }
}

const shopName = "Food City"; // change based on the shop
const notifications = JSON.parse(localStorage.getItem("shopNotifications") || "{}");

if (notifications[shopName]) {
    alert(`New shopper entered for ${shopName}!`);
    // Optionally clear the notification
    delete notifications[shopName];
    localStorage.setItem("shopNotifications", JSON.stringify(notifications));
}