import { footer } from '../../data';
import logo from '../../utils/images/logo1.png';
import Button from '../buttons/buttonOne';
import './footer.css';



const Footer = () => {
    return (
        <div className="myFooter">
            <div className="topFooter">
                <p>Back to top</p>
            </div>

            <div className="midFooter">
                <div className="midTop">
                    {footer.quickLinkRows.map(quickLinkRow =>(
                        <div className="quickLinks" key={quickLinkRow.id}>
                            <h4>{quickLinkRow.column?.title}</h4>

                            <ul>
                                {quickLinkRow.column.links.map(link => (
                                    <li key={link.id}>{link.title}</li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
                

                <div className="midButtom">
                    <img src={logo}/>
                    <div className="btnArea">
                        <Button icon='fa fa-globe' placeholder='English' isDropdown={true} />
                        <Button icon='fa fa-dollar' placeholder='USD-U.S. Dollar'/>
                        <Button icon='fa fa-flag' placeholder='United States'/>
                    </div>
                </div>
            </div>
            
            
            <div className="bottomFooter">
                <div className='bottomTop'>
                    {footer.amazonServices.map(service => (
                        <div key={service.id}>
                            <p>{service.title} <span>{service.link}</span></p>
                            
                        </div>
                    ))}
                </div>

                <div className="licence">
                    <div className="policy">
                        <p>Conditions of Use</p>
                        <p>Privacy Notice</p>
                        <p>Your Ads Privacy Choices</p>
                    </div>
                    <p>&#169; 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
            </div>


        </div>
    );
}
 
export default Footer;