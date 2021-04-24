import Button from '@material-ui/core/Button';
  
  export default function GenerateButton() {
  
    return (
      <div>
          <Button variant="contained" 
                  style={{color: "#FFFFFF", 
                          backgroundColor: "#27AE60"}} 
                  component="label" 
                  fullWidth>
            Draw HDL
          </Button>
      </div>
    );
  }