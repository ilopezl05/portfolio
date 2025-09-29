const DevIcon = ({
  iconName,
  color = "plain",
  size = "2rem",
  className = "",
}) => {
  const iconClass = `devicon-${iconName}-${color} ${className}`;

  return (
    <i className={iconClass} style={{ fontSize: size }} aria-label={iconName} />
  );
};

export default DevIcon;
