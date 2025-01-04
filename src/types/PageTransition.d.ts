declare interface PageTransition {
  isAnimating: boolean;
  firstLoad: boolean;
  init(): void;
  changePage(newPage: string, bool: boolean): void;
}