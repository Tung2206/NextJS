export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
   
    return (
      <section>
            <div className="header">
                Header Dashboard
            </div>
            {children}
            <div className="footer">
                Footer Dashboard
            </div>
      </section>

    )
  }
  