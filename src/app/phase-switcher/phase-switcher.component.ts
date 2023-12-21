// phase-switcher.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase-switcher',
  templateUrl: './phase-switcher.component.html',
  styleUrls: ['./phase-switcher.component.css'],
})
export class PhaseSwitcherComponent {
  phases = ['Phase 1', 'Phase 2', 'Phase 3'];
  phaseRoutes = ['page1', 'page2', 'page3'];
  currentPhaseIndex = 0;

  constructor(private router: Router) {}

  goToNextPhase() {
    if (this.currentPhaseIndex < this.phases.length - 1) {
      this.currentPhaseIndex++;
      this.router.navigate([this.phaseRoutes[this.currentPhaseIndex]]);
    }
  }

  goToPreviousPhase() {
    if (this.currentPhaseIndex > 0) {
      this.currentPhaseIndex--;
      this.router.navigate([this.phaseRoutes[this.currentPhaseIndex]]);
    }
  }
}
