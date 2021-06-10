import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {File} from "@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system";
import { DomSanitizer } from '@angular/platform-browser';
import {
  Observable,
  of // Add this
} from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data:any;
   selectedFile: File = null;
  private isImageLoading: boolean;
   constructor(private http: HttpClient, private domSanitizer: DomSanitizer){}

  onFileSelected(event: any){
   this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }
  OnUpload(string: any){
     const fd = new FormData();
     // @ts-ignore
    fd.append('image', this.selectedFile,this.selectedFile.name);
  this.http.post('http://192.168.1.47:5000/post_image/web/'+string,fd)
    .subscribe(res=>{
      console.log(res);
    })
  }
  // @ts-ignore
  onDownload():Observable<any>{
     this.http.get('http://192.168.1.47:5000/get_image',
        { responseType: 'Blob' as 'json' })
       .subscribe(data=>{
          this.createImageFromBlob(data);
         console.log(data);
       });


  }
  createImageFromBlob(image: Object) {
         let reader = new FileReader();
         reader.addEventListener("load", () => {
            // @ts-ignore
            this.data = this.domSanitizer.bypassSecurityTrustUrl(reader.result);
         }, false);

         if (image) {
            reader.readAsDataURL(<Blob>image);
            console.log(image)
         }
      }




  ngOnInit(): void {

  }

}
