function loadMinistryData(jsonPath) {
    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            document.getElementById('objective-text').innerText = data.objective;

            let qList = document.getElementById('questions-list');
            data.questions.forEach(q => {
                let li = document.createElement('li');
                li.textContent = q;
                qList.appendChild(li);
            });

            let tList = document.getElementById('timeline-list');
            data.timeline.forEach(item => {
                let li = document.createElement('li');
                li.textContent = `${item.date} — ${item.action}`;
                tList.appendChild(li);
            });

            let rList = document.getElementById('replies-list');
            data.replies.forEach(item => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.href = item.link;
                a.target = "_blank";
                a.textContent = `${item.date} — ${item.type}`;
                li.appendChild(a);
                rList.appendChild(li);
            });

            document.getElementById('status-text').innerText = data.status;
        })
        .catch(error => console.error('Error loading JSON:', error));
}
