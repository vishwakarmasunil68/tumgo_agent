import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileComplaintPage } from './file-complaint';

@NgModule({
  declarations: [
    FileComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(FileComplaintPage),
  ],
})
export class FileComplaintPageModule {}
