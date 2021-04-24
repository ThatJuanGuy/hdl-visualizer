import Button from '@material-ui/core/Button';
  
  export default function UploadMultipleButton() {
  
    return (
      <div>
          <Button variant="contained" color="primary" component="label" fullWidth>
            Upload Files
            <input accept=".hdl" multiple type="file" hidden/>
          </Button>
      </div>
    );
  }