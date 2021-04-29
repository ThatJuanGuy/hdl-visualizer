import './Left.css';
import GenerateButton from './GenerateButton/GenerateButton';
import UploadButton from './UploadButton/UploadButton';
import UploadMultipleButton from './UploadMultipleButton/UploadMultipleButton';
import DownloadButton from './DownloadButton/DownloadButton';

function Left() {
  return (
    <div>
      <p className="Title">
        HDL Visualizer
      </p>
      <p> 
        This website generates images of HDL defined chips. 
        To use it, simply upload your file and then hit generate.
      </p>
      <UploadButton />
      <br />
      <UploadMultipleButton />
      <br />
      <GenerateButton />
      <br />
      <DownloadButton />
    </div>
  );
}

export default Left;
