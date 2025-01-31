interface IconProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    name: string;
    selected: boolean;
    selectIcon: () => void;
}

const Icon: React.FC<IconProps> = ({ icon, name, selected, selectIcon }) => {
    return (
        <div onClick={() => selectIcon()} style={{ cursor: "pointer" }}>
            <img
                src={icon}
                alt={name}
                style={{ height: '70px', filter: selected ? 'sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)' : 'none' }}
            />
            <p style={{ color: 'white', textAlign: 'center', backgroundColor: selected ? '#000080' : 'transparent' }}>{name}</p>
        </div>
    );
}

export default Icon;