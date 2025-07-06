export default function ComplexDashboardLayout({
    children,
    login,
    users,
    revenue,
    notifications,
}: Readonly<{
    children: React.ReactNode;
    login: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
}>) {
    const isLoggedIn = true;

    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
            </div>
        </div>
    ) : (
        login
    );
}
