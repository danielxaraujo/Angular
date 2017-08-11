import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

const URL = 'http://127.0.0.1:3000/api/import/ofx';

@Component({
	selector: 'app-import-ofx',
	templateUrl: './import-ofx.component.html',
})
export class ImportOfxComponent implements OnInit {

	account_id: string;
	uploader: FileUploader = new FileUploader({ url: URL });
	hasBaseDropZoneOver: boolean = false;

	constructor(private detector: ChangeDetectorRef) { }

	ngOnInit() {

		this.uploader.onBuildItemForm = (fileItem: FileItem, form: FormData) => {
			form.append('account_id', this.account_id);
			return { fileItem, form }
		}

		this.account_id = '58ab4c1623ad9f4999c0b59a';
	};

	public fileOver(e: any): void {
		this.hasBaseDropZoneOver = e;
	}
}