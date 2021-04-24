import './Left.css';
import GenerateButton from './GenerateButton/GenerateButton';
import UploadButton from './UploadButton/UploadButton';
import UploadMultipleButton from './UploadMultipleButton/UploadMultipleButton';
import DownloadButton from './DownloadButton/DownloadButton';

function Left() {
  return (
    <div>
      <p class="Title">
        HDL Visualizer
      </p>
      <p> 
        This website generates an images of HDL defined chips. 
        To use it, simply upload your file and then hit generate.
      </p>
      <UploadButton />
      <UploadMultipleButton />
      <GenerateButton />
      <DownloadButton />
    </div>
  );
}

export default Left;
