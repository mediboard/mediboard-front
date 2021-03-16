export const Button = {
	sizes: {
    sm: {
      fontSize: "12px",
      padding: "16px",
    },
    md: {
      fontSize: "16px",
    },
  },
  variants: {
  	purple: {
  		bg: "#8186FF",
  	},
  	black: {
  		bg: "black",
      color: "white",
  	},
  },
  baseStyle: {
		color: "black",
    borderRadius: "0px",
  },
  defaultProps: {
  	size: "md",
  	variant: "purple",
  },
}
