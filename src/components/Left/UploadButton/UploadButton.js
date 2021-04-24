import Button from '@material-ui/core/Button';
  
  export default function UploadButton() {
  
    return (
      <div>
          <Button variant="contained" color="primary" component="label" fullWidth>
            Upload File
            <input accept=".hdl" type="file" hidden/>
          </Button>
      </div>
    );
  }