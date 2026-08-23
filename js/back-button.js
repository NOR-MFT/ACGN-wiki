// 全局返回按钮（纯箭头、无背景、位于导航栏内）
document.addEventListener('DOMContentLoaded', function () {
  if (window.history.length <= 1) return;

  if (document.getElementById('md-back-button')) return;

  var btn = document.createElement('button');
  btn.id = 'md-back-button';
  btn.innerHTML = '←';
  btn.setAttribute('aria-label', '返回上一页');
  btn.title = '返回上一页';

  btn.addEventListener('click', function () {
    window.history.back();
  });

  // 样式：透明背景，仅显示箭头，位置稍右移
  btn.style.cssText = [
    'position: fixed',
    'top: 4px',                 // 导航栏顶部
    'left: 16px',               // 左移改为16px，避免紧贴边缘
    'z-index: 9999',
    'width: 36px',
    'height: 36px',
    'line-height: 1',
    'font-size: 22px',
    'color: #ffffff',           // 白色箭头，与导航栏文字颜色一致
    'background-color: transparent',  // 无背景
    'border: none',
    'border-radius: 0',
    'cursor: pointer',
    'display: flex',
    'align-items: center',
    'justify-content: center',
    'box-shadow: none',
    'padding: 0',
    'margin: 0',
    'transition: opacity 0.2s ease',
    'opacity: 0.85'
  ].join(';');

  // 悬停时提高不透明度，增加反馈
  btn.addEventListener('mouseenter', function() {
    btn.style.opacity = '1';
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.opacity = '0.85';
  });

  document.body.appendChild(btn);
});