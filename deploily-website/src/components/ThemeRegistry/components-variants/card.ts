const Card = () => ({
  MuiCard: {
    styleOverrides: {
      root: {
        height: "200px",
        padding: "5%",
        boxShadow: "6px 10px 45px 4px #7090B0",
        backGroundColor: "black",
        borderRadius: "15px",
      },
    },
  },
  // MuiCardHeader: {
  //     styleOverrides: {
  //         root: {
  //             padding: defaultTheme.spacing(5),
  //             "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root":
  //             {
  //                 paddingTop: 0,
  //             },
  //             "& .MuiCardHeader-subheader": {
  //                 fontSize: "0.875rem",
  //             },
  //         },
  //         title: {
  //             lineHeight: 1,
  //             letterSpacing: "0.0125em",
  //             fontSize: 20,
  //             fontWeight: "bold",
  //             color: "#478E77",
  //             textAlign: "center",
  //             marginTop: "30px",
  //         },
  //         action: {
  //             marginTop: 0,
  //             marginRight: 0,
  //         },
  //     },
  // },
  // MuiCardContent: {
  //     styleOverrides: {
  //         root: {
  //             padding: defaultTheme.spacing(5),

  //             "& + .MuiCardContent-root": {
  //                 paddingTop: 0,
  //             },
  //             "&:last-of-type": {
  //                 paddingBottom: defaultTheme.spacing(5),
  //             },
  //             "& + .MuiCardActions-root": {
  //                 paddingTop: 0,
  //             },
  //         },
  //     },
  // },
  // MuiCardActions: {
  //     styleOverrides: {
  //         root: {
  //             padding: defaultTheme.spacing(5),
  //             "&.card-action-dense": {
  //                 padding: defaultTheme.spacing(0, 2.5, 2.5),
  //                 ".MuiCard-root .MuiCardMedia-root + &": {
  //                     paddingTop: defaultTheme.spacing(2.5),
  //                 },
  //                 ".MuiCard-root &:first-of-type": {
  //                     paddingTop: defaultTheme.spacing(5),
  //                     paddingBottom: defaultTheme.spacing(5),
  //                     "& + .MuiCardContent-root": {
  //                         paddingTop: 0,
  //                     },
  //                     "& + .MuiCardHeader-root": {
  //                         paddingTop: 0,
  //                     },
  //                 },
  //             },
  //             "& .MuiButton-text": {
  //                 paddingLeft: defaultTheme.spacing(2.5),
  //                 paddingRight: defaultTheme.spacing(2.5),
  //             },
  //         },
  //     },}
});

export default Card;
