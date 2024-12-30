export default function Buttons() {
    // // Resume download functionality
    // document.getElementById('downloadResume').addEventListener('click', function () {
    //     // Path to the resume file
    //     const resumePath = 'Resume.pdf'; // Ensure this matches the actual file location

    //     // Create a hidden link element
    //     const link = document.createElement('a');
    //     link.href = resumePath;
    //     link.download = 'My_Resume.pdf'; // Desired name for the downloaded file

    //     // Programmatically click the link
    //     link.click();
    // });
    return (
        <div className="temp-btn">
            <div className="buttons">
                {/* <button className="btn primary">Skills</button> */}
                <button type="button" className="btn outline" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">Skills</button>
                <button className="btn outline">Education</button>
                <button className="btn outline">Visit Projects</button>
            </div>
            <div className="buttons">
                <button id="downloadResume" className="btn outline">Download Resume</button>
                <a href="Certifications.html"><button className="btn outline">Certifications</button></a>
            </div>
        </div>
    )
}