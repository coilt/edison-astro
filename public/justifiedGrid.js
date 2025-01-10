export function JustifiedGrid() {
  const justifiedGrids = document.querySelectorAll('.justified-grid');

  if (justifiedGrids.length > 0) {
      justifiedGrids.forEach(grid => {
          justifiedGallery(grid, {
              rowHeight: 360,
              lastRow: 'nojustify',
              margins: 10
          });
      });
  }
};
