import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
  
  export default function UploadMultipleButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  color="primary" 
                  component="label" 
                  fullWidth
                  endIcon={<PublishIcon />
          }>
            Upload Other Files
            <input accept=".hdl" multiple type="file" hidden/>
          </Button>
      </div>
    );
  }