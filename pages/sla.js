import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Sla() {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>SLA | Assure Business & Communication</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/Assure-Biz-icon.png" />
            </Head>
            
            <main className={styles.main}>
                <Nav />
                
                <div className='banners'>
                    <h1>Service Level Agreement</h1>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section>
                            <Image src={"/arr-1.png"} alt="" width="400" height={300} />
                        </section>
                        <section className='text' style={{width:'100%'}}>
                            <h2>What is our service level agreement?</h2>
                            <p>Service Level Agreements (SLAs) focus on measuring and managing productivity and service quality improvement for IT outsourcing and are the key to determining the true value of an outsourcing engagement. SLAs validate expectations of the respective parties and set parameters for measuring project success. This important tool measures the status of an outsourcing project and empirically scores the performance of the vendor using measurable and enforceable results. This SLA helps you The Client meet or surpass business and technology service levels, which in turn leads to increased productivity and flexibility, and improved standardization and capacity.</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section className='text'>
                            <h2>Our SLA Responsibilities</h2>
                            <p>Communication and Negotiation with all 3rd Party ICT providers while prioritizing The Client’s specific needs</p>
                            <p>Provide realistic expectations of provider</p>
                            <p>Providing Priority Support whenever required outside of scheduled monthly visits</p>
                            <p>Access to a permanent Helpdesk, providing ongoing and continued Remote</p>
                            <p>Mediating with all relevant parties, such as supplier and staff, to improve service</p>
                            <p>Provide a platform for focusing on continuous improvement of The Client’s IT</p>
                            <p>Creating a framework for assessing and improving The Client</p>
                            <p>Implementation of clear guidelines regarding roles, responsibilities and accountabilities of all</p>
                            <p>setting up a basis for building trust, co-operation and partnership between all</p>
                            <p>Improve the Client’s control over costs relative to services</p>
                            <p>Assistance will be provided during any budgeting phase to ensure reliable cost estimations and predictions</p>
                        </section>
                        <section>
                            <p>Instant access to an entire IT Organisations skill, resources, knowledge base and IT Management software developed through years of testing and real-world</p>
                            <p>Access to a dedicated Account and Business Manager.</p>
                            <p>Manage any Thyme IT staff with regards to projects, deadlines, motivational, team culture, teambuilding and most importantly communication</p>
                            <p>Aligning all The Client’s branches to the same vision, standards and goals</p>
                            <p>Regular reports in laymen’s terms on the health and status of The Client’s IT Infrastructure</p>
                            <p>The training and coaching of all onsite staff with regards to newly installed technology, technology problem solving and productive thinking with a solution orientated</p>
                            <p>Designing, managing and aligning the strategic vision regarding all IT infrastructure with in The Client’s organization</p>
                            <p>A senior staff member will prepare for and attend all monthly and quarterly meetings related, directly or indirectly) to the Client’s IT If required by The Client</p>
                            <p>Research any proposed upgrades and obtain and negotiate for quotes that fall within the provided</p>
                            <p>Set up a plan that outlines the necessary steps to be taken should the IT infrastructure be compromised by external</p>
                            <p>Work with the Client to create innovative IT solutions for the client’s field of business</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section>
                            <h2>Site Standardisation</h2>
                            <p>We have certain standards that our entire environment needs to comply with for us to effectively support you and you company.</p>
                            <p>Please find below a list of standards required as mentioned above: Each of the Client’s sites requires a minimum of 2 backup drives for successful and sufficient backup procedure, it is the Client’s responsibility to run and store the backups.</p>
                            <p>It is the Clients responsibility to provide a central and secure location to store all license keys, activation codes and all relevant software information and media.</p>
                            <p>Server Software should not be installed on a Desktop motherboard.</p>
                            <p>All software must be a legal copy and only in use on 1 pc.</p>
                        </section>
                        <section className='text'>
                            <p>All passwords are confidential and will only be given to key individuals.</p>
                            <p>A naming convention needs to be applied as agreed on by technician and The Client.</p>
                            <p>All PCs require TeamViewer to be installed unless otherwise requested.</p>
                            <p>On completion of the site audit all info will be handed over only to The Owner and Responsible Client Member.</p>
                            <p>All domains, ADSL and other ISP should be maintained by one party if possible. If there are numerous parties involved a clear and direct guideline needs to be in place to provide start and end responsibility for each 3rd Party.</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section className='text' style={{width:'100%'}}>
                            <h2>General Overview</h2>
                            <p>This is a service level agreement (SLA) between Thyme IT Technologies (Pty) Ltd and the client to document:</p>
                            <ul>
                                <li>The IT Support Service Thyme IT provides to the Client</li>
                                <li>The general levels of response, availability and maintenance associated with this service;</li>
                                <li>The responsibilities of Thyme IT as a provider of this service and of The Client receiving this service;</li>
                                <li>The processes requesting specified service.</li>
                            </ul>
                        </section>
                        <section>
                            <Image src={"/sla-4.jpg"} alt="" width="400" height={300} />
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section>
                            <Image src={"/sla-5.jpeg"} alt="" width="400" height={300} />
                        </section>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Maintenance Duties</h2>
                            <p>Technicians will have set maintenance duties that must be completed on every scheduled site visit in accordance with the regulations and standards of Thyme IT. If the Client has unique requirements that need to be completed along with other standard tasks on every site visit, then The Client’s account manager must be notified of these requirements.</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Infrastructure server availability & reliability</h2>
                            <p>Most routine maintenance should not affect service availability. However, occasionally upgrades or enhancements may mean that we need to take the service down for a short period of time.</p>
                        </section>
                        <section>
                            <Image src={"/sla-6.jpg"} alt="" width="400" height={300} />
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container'>
                        <section>
                            <Image src={"/sla-7.jpg"} alt="" width="400" height={300} />
                        </section>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Quality of service & service standards</h2>
                            <p>Thyme IT warrants that the Services will be performed in a professional and efficient manner consistent with relevant industry standards.</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Telephonic & Remote Support</h2>
                            <p>Remote Access must be available to the relevant server via Remote Desktop or similar and to all users’ workstations via the Thyme IT Remote Support tool, whereby the Helpdesk will attempt to resolve any support calls remotely. Should the helpdesk not be able to resolve the issue remotely, a consultant will then be dispatched for onsite assistance.
Telephonic support is offered by technicians and will be at the discretion of the technicians if a call out must be booked.
Remote support will be used to resolve any queries that do not require a call out and could not be resolved through telephonic support.
The remote support will be assigned to the hours allocated as per this agreement.
Remote support to all other branches
Remote support to users outside of the network</p>
                        </section>
                        <section>
                            <Image src={"/sla-8.jpg"} alt="" width="400" height={300} />
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section>
                            <Image src={"/sla-9.jpg"} alt="" width="400" height={300} />
                        </section>
                        <section className='text' style={{width:'100%'}}>
                            <h2>On-site Support</h2>
                            <ul>
                                <li>Analysis of IT processes, systems and future requirements</li>
                                <li>Assistance in ensuring uniformity and optimization across all branches</li>
                                <li>All IT support queries to be captured in the onsite maintenance book or online portal</li>
                                <li>Maintenance work to be completed as per technician job card</li>
                                <li>Verify that all data backups and server backups completed successfully as per reports and the Client’s requirements.</li>
                                <li>Software and firmware updates to be configured  and installed on all clients networking infrastructures.</li>
                            </ul>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Physical Access</h2>
                            <p>The Client should ensure that Thyme IT employees are given reasonable authorised access to all servers, computers and networking infrastructure in order that the agreed upon services may be delivered and maintained in accordance with the terms of this SLA Agreement.</p>
                        </section>
                        <section>
                            <Image src={"/sla-10.jpg"} alt="" width="400" height={300} />
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section>
                            <Image src={"/sla-11.jpg"} alt="" width="400" height={300} />
                        </section>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Information & Data Security Measures</h2>
                            <p>Thyme IT will manage information and data security with reasonable efforts to restrict unauthorised access. Thyme IT will endeavor to ensure that its employees and representatives are fully aware of the risks associated with information and data security issues, and will ensure that all information is kept confidential.</p>
                            <p>At Thyme IT, we take data security very seriously and all the Technicians have signed an NDA, and legal action will be taken against the individual that breaches the terms of the Non-Disclosure Agreement.</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Back-up & Liability</h2>
                            <p>Thyme IT cannot be held liable for the following:</p>
                            <p>Unless it is specifically requested the setup and/or testing and/or maintenance of any backups.</p>
                            <p>The loss and/or damage to hardware, software and data by the various 3rd party software applications and hardware vendors used. Thyme IT will take the utmost precautions and apply industry standards to ensure minimum risk to The Client’s IT infrastructure and data
Any IT related work done by any 3rd party on behalf of the Client without Thyme IT’s knowledge or consent.</p>
                        </section>
                        <section>
                            <Image src={"/sla-12.jpg"} alt="" width="400" height={300} />
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section>
                            <Image src={"/sla-13.jpg"} alt="" width="400" height={300} />
                        </section>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Software legality</h2>
                            <p>Thyme IT will only supply legal proprietary computer software packages and adhere strictly to all license conditions. The Client must ensure that they own legal copies of all computer software installed on all servers and workstations. Should not all computer software be legally owned by The Client, Thyme IT will supply a proposal to rectify such situation as Thyme IT cannot condone the fraudulent use of proprietary computer software.</p>
                        </section>
                    </div>
                </div>
                
                <div className="dual_section">
                    <div className='container '>
                        <section className='text' style={{width:'100%'}}>
                            <h2>Costings & Charging Policies</h2>
                            <p>The SLA is charged monthly in advance and Invoices will be sent by the 22nd of the month and are payable by the last day of that respective month if a debit order is not in place.
The SLA pricing is valid for the next 12 months and will increase by 10% annually.</p>
                        </section>
                        <section>
                            <Image src={"/sla-14.jpg"} alt="" width="400" height={300} />
                        </section>
                    </div>
                </div>
                
                <Bottom />
                
            </main>
            
            <Footer />
        </div>
    )
}
