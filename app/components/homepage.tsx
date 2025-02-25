export function Header({ title, desc }: { title: string, desc: string }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{desc}</p>
        </header>
    );
}

export function GridItem({ 
    title,
    content,
    id,
    gridColumn = "auto",
    backgroundColor = "#c0e0ff"
}: { 
    title: string,
    content: React.ReactNode,
    id?: string,
    gridColumn?: string,
    backgroundColor?: string
}) {
    return (
        <div style={{
            backgroundColor,
            padding: "2rem",
            borderRadius: "24px",
            gridColumn
        }} id={id}>
            <h3>{title}</h3>
            {content}
        </div>
    );
}