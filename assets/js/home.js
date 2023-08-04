document.addEventListener('DOMContentLoaded', function() {
  const dateInput = document.getElementById('dateInput');

  // Initialize flatpickr with options (if needed)
  flatpickr(dateInput, {
    dateFormat: 'd-m-Y', // Customize the date format as per your requirement
    minDate: 'today',    // To prevent selecting past dates, set minDate to 'today'
  });

  const deleteBtn = document.getElementById('delete-task');
  deleteBtn.addEventListener('click', async function(e) {
    e.preventDefault();

    const checkedTaskCheckboxes = document.querySelectorAll('.task-checkbox:checked');
    const deleteItemIds = Array.from(checkedTaskCheckboxes).map((checkbox) => checkbox.dataset.id);
  
    // Check if there are any selected task IDs before proceeding
    if (deleteItemIds.length === 0) {
      console.log('No tasks selected for deletion.');
      return; // Exit the function if no tasks are selected
    }

    try {
      await fetch('/delete-tasks', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: deleteItemIds }),
      });

      // Perform any additional actions after successful deletion, like updating the UI or reloading the task list.
      window.location.reload(); // Example: Refresh the page to show the updated list after deletion.
    } catch (err) {
      console.log('error', err);
    }
  });

  //To add card(color style) to each task category 
  function setCategoryClass(taskElement, categoryValue) {
    taskElement.classList.remove('personal', 'work', 'school', 'cleaning', 'others');
    taskElement.classList.add(categoryValue);
  }
  async function setCategoryClassesFromDatabase() {
    try {
      const response = await fetch('/api/categories');
      const categories = await response.json();
     
      // Loop through the task-list-category divs and set their classes based on the category from the database
      const taskListCategoryDivs = document.querySelectorAll('.task-list-category');
      taskListCategoryDivs.forEach((taskListCategory) => {
        const taskCategory = taskListCategory.textContent.trim().toLowerCase();
        
        const hasCategory = categories.includes(taskCategory);
        if (hasCategory) {
          setCategoryClass(taskListCategory, taskCategory);
        }
      });
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  }
  // Call the function to set classes for task-list-category divs from the database
  setCategoryClassesFromDatabase();
});

