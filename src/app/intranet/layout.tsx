export default function IntranetLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html>
            <head>
                <title>Intranet</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}