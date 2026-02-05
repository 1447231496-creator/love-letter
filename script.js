// 获取按钮元素
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// 为"愿意"按钮添加点击事件
 yesBtn.addEventListener('click', function() {
    alert('太好了！我会一直珍惜你，爱你到永远！');
    // 可以在这里添加更多自定义的庆祝效果
});

// 为"再考虑考虑"按钮添加点击事件，使其具有趣味性
noBtn.addEventListener('mouseover', function() {
    // 随机改变按钮位置
    const randomX = Math.floor(Math.random() * 100) - 50;
    const randomY = Math.floor(Math.random() * 100) - 50;
    
    // 确保按钮不会移出可视区域
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;
    
    const newX = Math.max(0, Math.min(maxX, btnRect.left + randomX));
    const newY = Math.max(0, Math.min(maxY, btnRect.top + randomY));
    
    // 设置新位置
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// 当页面加载完成后执行
window.onload = function() {
    // 添加页面加载动画
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
};