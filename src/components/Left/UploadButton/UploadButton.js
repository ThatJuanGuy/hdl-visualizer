import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
  
  export default function UploadButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  color="primary" 
                  component="label" 
                  fullWidth
                  endIcon={<PublishIcon />}
          >
            Upload Main File
            <input accept=".hdl" type="file" hidden/>
          </Button>
      </div>
    );
  }