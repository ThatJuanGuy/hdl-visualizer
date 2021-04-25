import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
  
  export default function DownloadButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  style={{color: "#FFFFFF", 
                          backgroundColor: "#D9AF1B"}} 
                  component="label" 
                  fullWidth
                  endIcon={<GetAppIcon />}
          >
            Download Image
          </Button>
      </div>
    );
  }