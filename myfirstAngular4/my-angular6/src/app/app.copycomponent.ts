import { Table } from 'primeng/components/table/table';

export class CopyComponent {

  clipBoardArrayContent: any[];
  clipBoardStringContent: '';

  copyClipboard(copyContent) {
    this.clipBoardArrayContent = [];
    this.clipBoardStringContent = '';

    for (var i= copyContent.length - 1; i >= 0; i--) {
      // copyContent[i] = copyContent[i].replace(/<(.|\n)*?>/g, '');
      this.clipBoardArrayContent = Object.values(copyContent[i]);
      this.clipBoardArrayContent[0] = this.clipBoardArrayContent[0].replace(/<(.|\n)*?>/g, '');
      console.log(this.clipBoardArrayContent);
      this.clipBoardStringContent += this.clipBoardArrayContent.join('\t');
      this.clipBoardStringContent += '\n';
    }

    return this.clipBoardStringContent;
  }

  copyMessage(val: any) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.copyClipboard(val);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);


    // var a = Table.prototype.exportCSV;
    // console.log(a);

  }
}