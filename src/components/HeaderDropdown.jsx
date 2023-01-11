const HeaderDropdown = ({ name, link, options }) => {
    return (
        <div className="dropdown">
            <a className="dropbtn" href={link}>
                {name}
                <i className="fa fa-caret-down"></i>
            </a>
            {options && options.length && (
                <div className="dropdown-content">
                    {options.map((option, index) => (
                        <a key={index} href={option.link}>
                            {option.name}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderDropdown;
