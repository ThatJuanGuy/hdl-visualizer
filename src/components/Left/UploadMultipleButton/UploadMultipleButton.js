import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
  
  export default function UploadMultipleButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  color="primary" 
                  component="label" 
                  fullWidth
                  endIcon={<AddIcon />
          }>
            Upload Other Files
            <input accept=".hdl" multiple type="file" hidden/>
          </Button>
      </div>
    );
  }