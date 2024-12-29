import { Component, inject } from '@angular/core';
import { BlueprintCardComponent } from '../../components/blueprint-card/blueprint-card.component';
import { XcloudService } from '../../services/xcloud-service/xcloud.service';
import { log } from 'console';
import { CreateBlueprintModalComponent } from '../../components/create-blueprint-modal/create-blueprint-modal.component';

@Component({
  selector: 'app-xcloud',
  imports: [BlueprintCardComponent, CreateBlueprintModalComponent],
  templateUrl: './xcloud.component.html',
  styleUrl: './xcloud.component.scss',
  standalone: true,
})
export class XcloudComponent {
  xcloudService = inject(XcloudService);

  showBlueprints: boolean = true;

  constructor() {}

  ngOnInit() {}

  toggleBlueprints() {
    this.showBlueprints = !this.showBlueprints;
    console.log('showBlueprints', this.showBlueprints);
  }

  createNewBlueprint() {
    this.xcloudService.showCreateBlueprintModal.next(true);

    console.log(
      'createNewBlueprint',
      this.xcloudService.showCreateBlueprintModal.getValue()
    );
  }
}
