# 镂空模糊效果

- 出处：element-plus 官网 header
- 实现： backdrop-filter 实现

1.  background-image 实现镂空小方块
2.  backdrop-filter saturate 修改饱和度， blur 实现模糊

```css
 {
  background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
  backdrop-filter: saturate(50%) blur(4px);
}
```
