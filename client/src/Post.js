export default function Post(){
    return (
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2020/10/gmail-icon-2020-ios.jpg?w=730&crop=1"/>
            </div>
            <div className="texts">
                <h2>
                Gmail to enforce harsher rules in 2024 to keep spam from users inboxes
                </h2>
                <p className="info">
                    <a className="author">Aditi Maheshwari</a>
                    <time>2023-10-04 23:06</time>
                </p>
                <p className="summary">Google today is announcing a series of significant changes to how it handles email from bulk senders in an effort to cut down on spam and other unwanted emails. The company says that starting next year, bulk senders will need to authenticate their emails, offer an easy way to unsubscribe and stay under a reported spam threshold.</p>
            </div>
        </div>
    );
}