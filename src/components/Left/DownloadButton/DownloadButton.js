import Button from '@material-ui/core/Button';
  
  export default function DownloadButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  style={{color: "#FFFFFF", 
                          backgroundColor: "#D9AF1B"}} 
                  component="label" 
                  fullWidth>
            Download Image
          </Button>
      </div>
    );
  }