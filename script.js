let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    tasks.push({ id: Date.now(), text, completed: false });
    taskInput.value = '';
    saveAndRender();
}

function toggleTask(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveAndRender();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveAndRender();
}

function setFilter(filter, event) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderTasks();
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveAndRender();
}

function renderTasks() {
    taskList.innerHTML = '';
    
    let filteredTasks = tasks.filter(task => {
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        return true;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `<li style="text-align: center; color: #555; padding: 30px; display: block; font-size: 16px;">No tasks found</li>`;
        return;
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <div class="task-left" onclick="toggleTask(${task.id})">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="event.stopPropagation(); toggleTask(${task.id})">
                <span>${escapeHtml(task.text)}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
        `;
        taskList.append(li);
    });

    const activeCount = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

renderTasks();