import SendButton from "../components/SendButton";
import { useState } from "react";
import {
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, styled } from "@mui/material";

const Form = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    borderRadius: "0px",
    fontSize: "14px",
    "&.Mui-selected": {
      backgroundColor: "#8e2de2",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#8e2de2",
        color: "#fff",
      },
    },

    "&:hover": {
      backgroundColor: "#8e2de2",
      color: "#fff",
    },
  }));
  const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "8px",
    height: { xs: "50%", md: "inherit" },
    mt: { xs: "2%", md: "inherit" },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root": {
      borderBottom: "none",
    },
  }));

  const StyledBoxDesktop = styled(Box)(({ theme }) => ({
    width: "37%",
    height: "15.2%",
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    width: "90%",
    height: "17%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    pb: "2%",
  }));
  const StyledSelect = styled(Select)(({ theme }) => ({
    // marginTop: "3%",
    borderRadius: "10px",
    width: "100%",
      height: {
        sx:"50%",
      xl: "50%",
      lg: "60%",
    },
    backgroundColor: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },

    "& .MuiSelect-select": {
      fontFamily: "Noto Sans, sans-serif",
      fontWeight: 400,
    },
    "& .MuiMenuItem-root": {
      fontFamily: "Noto Sans, sans-serif",
      fontWeight: 400,
    },
    "& .MuiMenuItem-root.Mui-selected": {
      backgroundColor: "#8e2de2",
      color: "#fff",
      fontWeight: 400,
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "#8e2de2",
      color: "#fff",
      fontWeight: 400,
    },
  }));
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    category: "default",
  });

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectFocus = () => {
    setIsSelectOpen(true);
  };

  const handleSelectBlur = () => {
    setIsSelectOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Correo enviado con éxito");
      } else {
        alert("Hubo un problema al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <>
      {!matches ? (
        <Box
          sx={{
            paddingBottom: 0,
            height: isSelectOpen ? "125vh" : "118vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            transition: "height 0.3s ease",
            width: "100%",
            transform: isSelectOpen ? "translateY(10%)" : "translateY(0%)",
          }}
        >
          <Typography
            sx={{ pl: "7%", fontWeight: "600", pt: "2%" }}
            variant="h2"
          >
            Completá el formulario con tu consulta y te responderemos a la
            brevedad
          </Typography>
          <Box
            onSubmit={handleSubmit}
            sx={{
              background: "linear-gradient(180deg, #9f6ed7 0%, #fee9b5 100%)",
              width: "89%",
              height: isSelectOpen ? "95%" : "70%",
              borderRadius: "20px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              boxSizing: "border-box",
              paddingTop: "0%",
              paddingBottom: "0%",
              transition: "height 0.3s ease",
            }}
          >
            <StyledBoxDesktop>
              <Typography variant="body2" sx={{ pb: "2%" }}>
                Nombre
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                name="name"
                placeholder="Juan"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                fullWidth

              />
            </StyledBoxDesktop>
            <StyledBoxDesktop>
              <Typography variant="body2" sx={{ pb: "2%" }}>
                Apellido
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                name="lastName"
                placeholder="Pérez"

                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </StyledBoxDesktop>
            <StyledBoxDesktop>
              <Typography variant="body2" sx={{ mb: "-2%" }}>
                Dropdown Title
              </Typography>
              <StyledSelect
              sx={{    mt: "3%",
              }}
                onFocus={handleSelectFocus}
                onBlur={handleSelectBlur}
                name="category"
                value={formData.category}
                onChange={handleChange}
                label="Categoria"
                MenuProps={{
                  PaperProps: {
                    style: {
                      borderRadius: "10px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      padding: "0px",
                      height: {
                        xl: "22.5%",
                        lg: "13.5%",
                      },
                    },
                  },
                }}
                
              >
                <CustomMenuItem value="default">
                  Quiero probar la app
                </CustomMenuItem>
                <CustomMenuItem value="investor">
                  Soy inversionista
                </CustomMenuItem>
                <CustomMenuItem value="project">
                  Quiero formar parte de un proyecto
                </CustomMenuItem>
              </StyledSelect>
            </StyledBoxDesktop>
            <StyledBoxDesktop>
              <Typography variant="body2" sx={{ pb: "1%" }}>
                Email
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                placeholder="jperez@gmail.com"

                fullWidth
              />
            </StyledBoxDesktop>
            <StyledBoxDesktop
              sx={{
                position: "relative",
                transition: "transform 0.3s ease",
                transform: isSelectOpen ? "translateY(15%)" : "translateY(0%)",
              }}
            >
              <Typography sx={{ pb: "2%" }} variant="body2">
                Deja tu duda o inquietud
              </Typography>
              <StyledTextField
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
              />
            </StyledBoxDesktop>
            <StyledBoxDesktop
              sx={{
                position: "relative",
                transition: "transform 0.3s ease",
                transform: isSelectOpen ? "translateY(10%)" : "translateY(0%)",
              }}
            >
              <Typography sx={{ pb: "2%" }} variant="body2">
                Teléfono
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                placeholder="123456789"

                fullWidth
              />
            </StyledBoxDesktop>
            <Box
              sx={{
                width: "75%",
                height: "12.2%",
                marginLeft: "7%",
                transform: isSelectOpen ? "translateY(20%)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <SendButton text="Enviar" onClick={handleSubmit} />{" "}
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              margin: 0,
              padding: 0,
              textAlign: "left",
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ pl: "7%", fontWeight: "600", pt: "2%" }}
            >
              Completá el formulario con tu consulta y te responderemos a la
              brevedad
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                background: "linear-gradient(180deg, #9f6ed7 0%, #fee9b5 100%)",
                width: "90%",
                height: "max-content",
                borderRadius: "20px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "center",
                boxSizing: "border-box",
                paddingTop: "0%",
                paddingBottom: "50%",
              }}
            >
              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Nombre
                </Typography>
                <StyledTextField
                  name="name"
                  placeholder="Juan"

                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </StyledBox>

              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Apellido
                </Typography>

                <StyledTextField
                  name="name"
                  placeholder="Pérez"


                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </StyledBox>

              <StyledBox>
                <Typography sx={{ mb: "2%", fontWeight: 600 }} variant="body2">
                  Dropdown Title
                </Typography>

                <StyledSelect
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Categoria"
                  MenuProps={{
                    PaperProps: {
                      style: {
                        borderRadius: "10px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        padding: "0px",
                        height: {
                          xl: "22.5%",
                          lg: "13.5%",
                        },
                      },
                    },
                  }}
                  
                >
                  <CustomMenuItem value="default">
                    Quiero probar la app
                  </CustomMenuItem>
                  <CustomMenuItem value="investor">
                    Soy inversionista
                  </CustomMenuItem>
                  <CustomMenuItem value="project">
                    Quiero formar parte de un proyecto
                  </CustomMenuItem>
                </StyledSelect>
              </StyledBox>

              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Teléfono
                </Typography>
                <StyledTextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                  placeholder="123456789"

                />
              </StyledBox>

              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <StyledTextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  placeholder="jperez@gmail.com"

                  fullWidth
                />
              </StyledBox>
              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Deja tu duda o inquietud
                </Typography>
                <StyledTextField
                  sx={{
                    height: "70%",
                  }}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </StyledBox>

              <Box
                sx={{
                  width: "125%",
                  height: "7%",
                  paddingLeft: "12%",
                  paddingTop: "1%",

                  paddingBottom: "15%",
                }}
              >
                
                <SendButton text="Enviar" onClick={handleSubmit} />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Form;
