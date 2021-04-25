import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
  
  export default function GenerateButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  style={{color: "#FFFFFF", 
                          backgroundColor: "#27AE60",
                  }}
                  component="label" 
                  fullWidth
                  endIcon={<CreateIcon />}
          >
            Draw HDL
          </Button>
      </div>
    );
  }