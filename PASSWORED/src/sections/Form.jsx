// import SendButton from "../components/SendButton";
import { useState } from "react";
import {
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,Button
} from "@mui/material";
import { Box, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./form.module.css";
// import Button from "../components/CallButton";
import useResponsive from "../hooks/useResponsive";

const Form = () => {
  const { isMobile } = useResponsive();

  //Estilos
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

  // const StyledBoxDesktop = styled(Box)(({ theme }) => ({
  //   width: "37%",
  //   height: "15.2%",
  // }));

  const StyledBox = styled(Box)(({ theme }) => ({
    width: isMobile ? "90%" : "37%",
    height: isMobile ? "17%" : "15.2%%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    pb: "2%",
    marginTop: isMobile ? "5%" : "0%",
  }));
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
  const StyledSelect = styled(Select)(({ theme }) => ({
    // marginTop: "3%",
    borderRadius: "10px",
    width: "100%",
    height: {
      sx: "50%",
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
  const StyledButton = styled(Button)(({ theme }) => ({
    
    backgroundColor: "#8E2DE2",
    padding: "19px",
    marginLeft: "-10%",
    width: {
      xs: "50%", // Para pantallas pequeñas
      sm: "17%"  // Para pantallas más grandes
    },
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "50px",
    color: "white",
    fontSize: "20px",
    border: "none",
    boxShadow: "none",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#7A1FCE",
    },
  
  }));
  //Apertura

  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSelectOpen = () => {
    setIsSelectOpen(true);
  };

  const handleSelectClose = () => {
    setIsSelectOpen(false);
  };

  //Formulario
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const {
    register,
    handleSubmit,
    reset,watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      category: "Quiero probar la app",
    },
  });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [ name]: value
  //   });
  // };
  // const { register, handleSubmit, reset, formState: { errors } } = useForm({
  //   defaultValues: {
  //     name: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     message: '',
  //     category: 'default',
  //   },
  // });
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:3001/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Correo enviado con éxito");
  //       // Reset form after successful submission
  //       setFormData({
  //         name: "",
  //         lastName: "",
  //         email: "",
  //         phone: "",
  //         message: "",
  //         category: "default",
  //       });
  //     } else {
  //       alert("Hubo un problema al enviar el correo");
  //     }
  //   } catch (error) {
  //     console.error("Error al enviar el correo:", error);
  //   }
  // };
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        
        method: "POST",
        
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Correo enviado con éxito");
        reset(); // Resetear el formulario
      } else {
        alert("Hubo un problema al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };
  return (
    <>
      {!isMobile ? (
        <Box
          sx={{
            paddingBottom: 0,
            // height: isSelectOpen ? "125vh" : "118vh",
            height: "118vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            transition: "height 0.3s ease",
            width: "100%",
            // transform: isSelectOpen ? "translateY(10%)" : "translateY(0%)",
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
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              background: "linear-gradient(180deg, #9f6ed7 0%, #fee9b5 100%)",
              width: "89%",
              // height: isSelectOpen ? "95%" : "70%",
              height: "70%",
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
            <StyledBox>
              <Typography variant="body2" sx={{ pb: "2%" }}>
                Nombre
              </Typography>
              <StyledTextField
                {...register("name")}
                // name="name"
                placeholder="Juan"
                //  value={formData.name}
                //  onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </StyledBox>
            <StyledBox>
              <Typography variant="body2" sx={{ pb: "2%" }}>
                Apellido
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                // name="lastName"
                placeholder="Pérez"
                {...register("lastName")}
                // value={formData.lastName}
                // onChange={handleChange}
                variant="outlined"
                fullWidth
              />
            </StyledBox>

            <StyledBox>
              <Typography variant="body2" sx={{ mb: "-2%" }}>
                Dropdown Title
              </Typography>
              {/* <StyledSelect
                sx={{ mt: "3%" }}
                // onOpen={handleSelectFocus}
                // onBlur={handleSelectBlur}

                onOpen={handleSelectOpen}
                onClose={handleSelectClose}
                // defaultValue="Quiero probar la app"
                  name="category"
                // value={formData.category}
                // onChange={handleChange}
                {...register("category")}
                value={watch("category")} 
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
                <CustomMenuItem value="Quiero probar la app">
                  Quiero probar la app
                </CustomMenuItem>
                <CustomMenuItem value="Soy inversionista">
                  Soy inversionista
                </CustomMenuItem>
                <CustomMenuItem value=" Quiero formar parte de un proyecto">
                  Quiero formar parte de un proyecto
                </CustomMenuItem>
              </StyledSelect> */}
               <StyledSelect
                sx={{ mt: "3%" }}
  
                  
                open={isSelectOpen}  
                onOpen={() => setIsSelectOpen(true)}  
                onClose={() => setIsSelectOpen(false)} 
                   name="category"
               
                {...register("category")}
                value={watch("category")} 
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
                <CustomMenuItem value="Quiero probar la app">
                  Quiero probar la app
                </CustomMenuItem>
                <CustomMenuItem value="Soy inversionista">
                  Soy inversionista
                </CustomMenuItem>
                <CustomMenuItem value=" Quiero formar parte de un proyecto">
                  Quiero formar parte de un proyecto
                </CustomMenuItem>
              </StyledSelect>
            </StyledBox>
            <StyledBox>
              <Typography variant="body2" sx={{ pb: "1%" }}>
                Email
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                {...register("email")}
                // name="email"
                // type="email"
                // value={formData.email}
                // onChange={handleChange}
                variant="outlined"
                placeholder="jperez@gmail.com"
                fullWidth
              />
            </StyledBox>
            <StyledBox
              sx={{
                // backgroundColor:"red",
                position: "relative",
                transition: "transform 0.3s ease",
                transform: isSelectOpen ? "translateY(25%)" : "translateY(0%)",
                height: "25.2%",
                //  pt:isSelectOpen ? "1%":"2%"
                mt: "-1%",
              }}
            >
              <Typography sx={{ pb: "2%" }} variant="body2">
                Deja tu duda o inquietud
              </Typography>
              <StyledTextField
                {...register("message")}
                // name="message"
                // value={formData.message}
                // onChange={handleChange}
                variant="outlined"
                fullWidth
                sx={{
                  height: "100px",
                  width: "100%",

                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                }}
              />
            </StyledBox>
            <StyledBox
              sx={{
                mt: "-3%",
                position: "relative",
                transition: "transform 0.3s ease",
                transform: isSelectOpen ? "translateY(40%)" : "translateY(0%)",
              }}
            >
              <Typography sx={{ pb: "2%" }} variant="body2">
                Teléfono
              </Typography>
              <StyledTextField
                sx={{ backgroundColor: "white", borderRadius: "8px" }}
                // name="phone"
                {...register("phone")}
                // value={formData.phone}
                // onChange={handleChange}
                variant="outlined"
                placeholder="123456789"
                fullWidth
              />
            </StyledBox>
            <Box
              sx={{
                width: "75%",
                height: "12.2%",
                marginLeft: "7%",
                transform: isSelectOpen ? "translateY(25%)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
                                          {/* <Button className={styles.sendButton} text="Enviar"   /> */}
                                          <StyledButton
  type="submit"
  variant="contained"
  sx={{
    backgroundColor: "#8E2DE2",
    padding: "19px",
    marginLeft: "-10%",
    width: {
      xs: "50%", // Para pantallas pequeñas
      sm: "17%"  // Para pantallas más grandes
    },
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "50px",
    color: "white",
    fontSize: "20px",
    border: "none",
    boxShadow: "none",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#7A1FCE",
    },
  }}
>
  Enviar
</StyledButton>

              {/* <SendButton text="Enviar" type="submit" />{" "} */}
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
              height: "max-content",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ pl: "7%", fontWeight: "600", pt: "2%", pb: "2%", pr: "2%" }}
            >
              Completá el formulario con tu consulta y te responderemos a la
              brevedad
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
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
                paddingBottom: isMobile ? "0%" : "50%",
              }}
            >
              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Nombre
                </Typography>
                <StyledTextField
                  // name="name"
                  placeholder="Juan"
                  {...register("name")}
                  // value={formData.name}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </StyledBox>

              <StyledBox>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Apellido
                </Typography>

                <StyledTextField
                  // name="name"
                  placeholder="Pérez"
                  {...register("lastName")}
                  // value={formData.lastName}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </StyledBox>

              <StyledBox>
                <Typography sx={{ mb: "2%", fontWeight: 600 }} variant="body2">
                  Dropdown Title
                </Typography>

                <StyledSelect
                  // name="category"
                  {...register("category")}
                  defaultValue="default"
                  // value={formData.category}
                  // onChange={handleChange}
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
                  {...register("phone")}
                  // value={formData.name}
                  // onChange={handleChange}
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
                  {...register("email")}
                  // value={formData.name}
                  // onChange={handleChange}
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
                    height: "100px",
                  }}
                  // name="message"
                  {...register("message")}
                  // value={formData.name}
                  // onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
              </StyledBox>

              <Box
                sx={{
                  width: "125%",
                  height: "7%",
                  paddingLeft: "12%",
                  paddingTop: "15%",

                  paddingBottom: "15%",
                }}
              >
                {/* <SendButton
                  text="Enviar"
                  onClick={handleSubmit}
                  type="submit"
                /> */}
                           <StyledButton
  type="submit"
  variant="contained"
  sx={{
    backgroundColor: "#8E2DE2",
    padding: "19px",
    marginLeft: "-10%",
    width: {
      xs: "50%", // Para pantallas pequeñas
      sm: "17%"  // Para pantallas más grandes
    },
    height: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: "50px",
    color: "white",
    fontSize: "20px",
    border: "none",
    boxShadow: "none",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#7A1FCE",
    },
  }}
>
  Enviar
</StyledButton>
 
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Form;
