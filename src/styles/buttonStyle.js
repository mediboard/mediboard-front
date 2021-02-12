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
  	green: {
  		bg: "#45AB5C",
  	},
  	brown: {
  		bg: "#A07C5B",
  	},
  },
  baseStyle: {
		color: "black",
  },
  defaultProps: {
  	size: "md",
  	variant: "green",
  },
}
