import React, { useEffect } from 'react';
import './SideBar.css';


function FluidBlocks() {
    useEffect(() => {
        function fluidBlock(block) {
            const prnt = block.parentElement;

            function moveBlock() {
                const windowHeight = window.innerHeight;
                const hBlockDiff = block.clientHeight - windowHeight;
                const hPrntDiff = prnt.clientHeight - windowHeight;

                requestAnimationFrame(moveBlock);

                if (hBlockDiff > 0 && block.classList.contains("js-ag-fixed")) {
                    const prntOffset = prnt.getBoundingClientRect().bottom - windowHeight;
                    const offsetY = hBlockDiff * (prntOffset / hPrntDiff - 1);

                    if (prntOffset > 30) {
                        block.classList.add("js-col");
                    } else {
                        block.classList.remove("js-col");
                    }

                    block.style.transform = `translateY(${offsetY}px)`;
                }
            }

            if (block.clientHeight < prnt.clientHeight) {
                document.addEventListener("scroll", () => {

                    if (prnt.getBoundingClientRect().bottom < window.innerHeight) {
                        block.classList.remove("js-ag-fixed", "js-col");
                        block.classList.add("js-ag-fixed_bottom");
                    } else if (prnt.getBoundingClientRect().top > 0) {
                        block.classList.remove("js-ag-fixed", "js-ag-fixed_bottom");
                        block.classList.add("js-col");
                    } else {
                        block.classList.remove("js-ag-fixed_bottom");
                        block.classList.add("js-ag-fixed");
                    }
                });

                moveBlock();
            }
        }

        const fluidBlocks = document.querySelectorAll(".js-ag-aside-content, .js-ag-sidebar-content");
        fluidBlocks.forEach(fluidBlock);

        return () => {
            fluidBlocks.forEach(block => {
                block.removeEventListener("scroll", fluidBlock);
            });
        };
    }, []);

    function detectIE() {
        const ua = window.navigator.userAgent;

        const msie = ua.indexOf("MSIE ");

        if (msie > 0) {
            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
        }

        const trident = ua.indexOf("Trident/");

        if (trident > 0) {
            const rv = ua.indexOf("rv:");

            return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
        }

        const edge = ua.indexOf("Edge/");

        if (edge > 0) {
            return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
        }

        return false;
    }

    useEffect(() => {
        if (detectIE() === false) {
            // Init fluid blocks if not Internet Explorer
            // eslint-disable-next-line no-unused-expressions
            FluidBlocks;
        }
    }, []);

    return (

        <div className="ag-content-page">

            <div className="ag-content">
                <div className="ag-format-container">
                    <div className="ag-content-block">
                        <main className="ag-content_main">
                            <div className="ag-content-column_central">
                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;   Seizure of commercial consignment draws FO ire
                                    </div>
                                    <h3 className='small'>ISLAMABAD: The Foreign Office on Saturday issued a sharp rebuke in response to India’s interception and seizure of a commercial consignment en route to Pakistan, labelling the action as an “unjustified seizure” and criticising India’s self-assumed role as a regional enforcer.</h3>

                                    <div className="ag-content_descr">
                                        <p>
                                            “Pakistan condemns India’s high-handedness in seizure of commercial goods. This disruption of free trade underscores the dangers inherent in the arbitrary assumption of policing roles by states with dubious credentials,” Foreign Office spokesperson Mumtaz Zahra Baloch said.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span> Her comments came after media reports about the interception by India on Jan 23 of a Malta-flagged merchant vessel, CMA CGM Attila, near Mumbai’s Nhava Sheva port. The Karachi-bound ship from China was boarded, and its cargo was inspected based on what Indians claimed to be specific intelligence inputs.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span> Indian customs officials, according to statements made to Indian media, found an Italian-made computer numerical control (CNC) machine within the consignment, alleging its potential utility in nuclear and ballistic missile programmes, and subsequently confiscated it.
                                        </p>
                                        <h3 className='small'>Indian agencies confiscated goods on Karachi-bound ship :</h3>
                                        <p>
                                            Ms Baloch clarified that the item in question was “a commercial lathe machine”. The intended recipient of the seized machinery has been identified as Cosmos Engineering, a Karachi-based firm that manufactures automobile parts and home appliances.
                                            <br />

                                            <span className='up'>&#9632;</span> The consignment was seized after the port officials had alerted the Indian defence authorities, who inspected the heavy cargo and reported their suspicions. Officials in India were quoted as saying that the seizure fell under the “prevention of possible proliferation by Pakistan and China”.
                                            <br />

                                            According to Indian media reports, documents such as the bill of lading and other consignment details purportedly showed that the consigner was Shanghai JXE Global Logistics Co Ltd and weighed 22,180 kilograms.
                                            <br />
                                            <br />

                                            “This is a simple case of import of a commercial lathe machine by a Karachi-based commercial entity, which supplies parts to the automobile industry in Pakistan,” Ms Baloch elaborated. “Speci­fications of the equipment clearly indicate its purely commercial use. The transaction was being conducted through transparent banking channels with all the relevant documentation.”
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>  Criticising the Indian action, she remarked, “Such acts also highlight the growing impunity of certain states in violating international norms and taking arbitrary measures in violation of international law.”
                                            <br />
                                            <br />

                                            Our correspondent in New Delhi also contributed to this report
                                        </p>

                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;  Shehbaz poised for another term at helm
                                    </div>
                                    <h3 className='small'>PML-N chief enjoys support of 205 MNAs, needs 169 votes to defeat Omar Ayub :</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            ISLAMABAD: PML-N President Shehbaz Sharif, who is the joint candidate of the newly-formed eight-party alliance, looks poised to win the election for prime minister for the second time, as he faces PTI-nominated Omar Ayub Khan in the contest scheduled to be held in the newly-constituted National Assembly on Sunday (today).
                                            <br />

                                            <span className='up'>&#9632;</span>   Both candidates submitted their nomination papers to the National Assembly Secretariat, which were declared valid by Speaker Ayaz Sadiq after the scrutiny, conducted in the presence of the leaders from both sides.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>   According to the National Assem­bly Secretariat, eight nomination papers had been submitted by Mr Sharif whereas four papers were submitted by Mr Khan carrying the signatures of different proposers and seconders.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>   Omar Ayub had raised an objection against Shehbaz Sharif, saying the PML-N leader was ‘gifted’ his NA seat through manipulation in Form-47. He said the lawmaker could not contest the PM election because he had lost the constituency as per Form-45. He has been wrongly administered the oath as MNA and thus cannot be a candidate for the prime minister’s position, Mr Ayub said in a tweet. The objection was rejected.
                                            <br />

                                            <span className='up'>&#9632;</span>  After getting the offices of the speaker and the deputy speaker in nearly one-sided contests on Friday, the newly-formed alliance seems confident to win the office of the country’s chief executive whereas the PTI lawmakers, who had been elected as independents and later joined the Sunni Ittehad Council (SIC), are expected to continue their noisy protest in the house over the alleged rigging in the Feb 8 elections.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>  Besides the PML-N, Mr Sharif has the backing of the PPP, MQM-P, PML-Q, BAP, PML-Z, IPP, and the NP having a total of 205 members. Two MNAs-elect from the MQM-P and PPP have yet to take oath. In order to become the leader of the house, Mr Sharif requires 169 votes in the 336-member house.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span> On the other hand, the PTI-backed opposition has 102 lawmakers, out of which one member has not taken the oath. Meanwhile, the JUI-F and BNP-Mengal are likely to boycott the poll.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>    On Friday, Mr Sadiq of PML-N won the speaker’s election after securing 199 votes against his rival Amir Dogar of PTI, who secured 91 votes in the house.
                                            <br />

                                            <br />

                                            <span className='up'>&#9632;</span>     The elections of the speaker and deputy speaker were conducted through a secret ballot amid protests by PTI lawmakers who declared it “unconstitutional” saying the house was incomplete without allocation of reserved seats.
                                        </p>
                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;  54pc Pakistanis say polls were transparent: report
                                    </div>
                                    <h3 className='small'>ISLAMABAD: While Pakistan Tehreek-i-Insaf (PTI) has been alleging that it was deprived of almost 80 seats of National Assembly, a recent study claimed that 54 per cent of Pakistanis believed the elections were overall transparent.:</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>  The study was conducted by IPSOS, one of the largest research companies operating in 90 countries with more than 20,000 research professionals.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    However, 39pc thought the February 8 elections were rigged. The highest perception of rigging came from Khyber Pakhtunkhwa (KP), the province in which the PTI won majority, and where 73pc people believed that elections were rigged.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    IPSOS in its study, “Post-election perception survey regarding transparency and rigging”, interviewed over 3,000 people from across the country.
                                        </p>

                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;  Israel has accepted truce proposal, US says
                                    </div>
                                    <h3 className='small'>GAZA STRIP: Israel has “more or less accepted” a proposal for a six-week ceasefire in the Gaza Strip, a US official said on Saturday as Palestinian negotiators were expected in Cairo:</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>   Mediators have been scrambling to lock in a truce before Ramazan begins on March 10 or 11.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    The US official told reporters that “there’s a framework deal” for a ceasefire which “the Israelis have more or less accepted”.
                                        </p>
                                        <h3 className='small'>“Right now, the ball is in the camp of Hamas.”</h3>
                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;   Three militants killed in Karak: ISPR
                                    </div>
                                    <h3 className='small'>PESHAWAR: Three militants were killed and four sustained injuries in a crossfire between security forces and militants in district Karak on Saturday.</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>   A statement issued by the military’s media wing, Inter-Services Public Relations (ISPR) said that security forces carried out an intelligence based operation (IBO) in Karak on the reported presence of militants, adding that intense fire exchange took place between security forces and militants.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>   Three militants were killed and four others sustained injuries, it said, adding that weapons, ammunition and explosives were also recovered from them. The militants had remained actively involved in numerous militant activities against law enforcement agencies as well as innocent civilians, the ISPR said.
                                        </p>
                                        <h3 className='small'>“Sanitisation operation is being conducted to eliminate any other terrorist found in the area,” it said.</h3>

                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;   Political optimism produces another bullish week on PSX
                                    </div>
                                    <h3 className='small'>KARACHI: Political stability with the smooth formation of new provincial governments in the four provinces, deceleration of inflation and strong corporate results helped the stock market to turn in another robust weekly performance.</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>   Arif Habib Ltd said the market continued its positive momentum as the benchmark KSE 100-share index witnessed a surge from last week’s closing of 62,816 to above 65,000, reflecting investor optimism amid the ongoing government formation process.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    With the swearing-in of the MNAs-elect and subsequent election of the NA speaker and the impending vote for a new prime minister on Sunday, the market has responded positively to expectations of political stability and government formation.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>     The rollover of a $2bn loan by China helped the State Bank of Pakistan to maintain its holdings at a reasonable level. However, the SBP reported its forex reserves decreased by $63m to $7.9bn during the week ended on Feb 23.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>   Additionally, the Federal Board of Revenue collected Rs681bn in February against the projection of Rs714bn, reflecting a massive shortfall of Rs33bn. During the week the rupee closed at 279.19 against the US dollar, appreciating by Rs0.17 or 0.06pc week-on-week.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    On the economic front, the trade deficit narrowed by 30pc during the first eight months of FY24 and the headline inflation decelerated to 23.1pc in February from 28.34pc in the preceding month. This unexpected massive decline in CPI-based inflation hitting a 20-month low revived hopes of the market for an interest rate cut in the upcoming monetary policy review from the unprecedented 22pc.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>     Hence, the market closed at 65,326 points, surging 2,510 points or 4pc week-on-week.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    Sector-wise positive contributions came from commercial banks (806 points), fertiliser (777 points), oil & gas exploration (280 points), auto assembler (184 points) and cement (159 points).
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>   Meanwhile, the sectors which mainly contributed negatively were technology (37 points), pharmaceuticals (28 points), leather & tanneries (24 points), and cable and electrical goods (11 points). Scrip-wise positive contributors were Engro Corporation (279 points), Engro Fertilisers Ltd (211 points), Meezan Bank Ltd (182 points), Millat Tractor Ltd (160 points) and Mari Petroleum Ltd (160 points). On the flip side, negative contributions came from TRG Pakistan (51 points), Oil and Gas Development Company Ltd (37 points), Service Industries Ltd (24 points), Pak Elektron Ltd (11 ponits) and Abbott Laboratories Ltd (11 points).
                                        </p>
                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="ag-content_title">
                                        &#9670;  PBC calls for five-year IMF programme
                                    </div>
                                    <h3 className='small'>KARACHI: As the upcoming government will be seeking a fresh bailout amid growing economic challenges, the Pakistan Business Council (PBC) has called upon the International Monetary Fund (IMF) to allow a five-year funding programme instead of three years.</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>    A longer, five-year programme will allow the IMF to make tranche releases conditional on progress on fundamental reforms of the energy sector and the privatisation or closure of loss-making state enterprises.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    Besides financial burden, inefficiently run state-owned enterprises that operate in the commercial space, provide unfair competition to the private sector, impeding scale and competitiveness, the government should be encouraged to get out of business, the council said.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>     PBC Chief Executive Ehsan Malik in a letter to IMF’s Resident Representative in Pakistan, Ms Esther Perez Ruiz said that front loading of targets by IMF stems from the relatively short-term programmes that have hitherto been offered to Pakistan.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>    No doubt, Mr Ehsan said that the IMF will require the mounting debts to be reprofiled to restore confidence in the economy. A larger as well as a longer IMF programme would provide creditors the necessary comfort.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>    He hoped that the next programme could be more reform-centric than the previous.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>        While sharing the contours that should differentiate the new programme from the previous, he said that the primary reason why the previous programmes failed to lead to sustainable reforms was the lack of political will and determination of various governments.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    However, the IMF too needs to reflect on the design of its assistance package. The flaws in the economy have worsened over the years and the new programme would need to take account of this.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    He said the PBC has been stressing the need for the IMF to move away from purely short-term and quantitative to a mix of medium-term quantitative and qualitative targets.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>    He said in the absence of the FBR’s capability and capacity to broaden the tax base as well as the weak political will of governments to disturb vote banks, IMF’s front-ended tax collection targets have been met by raising the tax burden on those that are already bearing a disproportionate load.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="ag-content-column_right">
                                <div className="js-ag-sidebar-content js-col">
                                </div>
                            </div>
                        </main>

                        <aside className="ag-content_sidebar">
                            <div className="js-ag-aside-content js-col">
                                <div className="ag-content_box">
                                    <div className="sm-1">
                                        &#9670;  Barrister Gohar elected PTI chairman :
                                    </div>
                                    <h3 className='sm-2'>Barrister Gohar Khan was declared the PTI chairman again following fresh intra-party polls, according to results shared by the party’s spokesperson and Chief Election Commissioner Raoof Hasan on Sunday.</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>  Gohar won the chairman’s election unopposed, Hasan revealed during a press conference.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>  This is the third time PTI has conducted intraparty elections in the past two years, following its Dec 2 elections which resulted in its electoral ‘bat’ symbol ultimately being revoked by the Supreme Court following back and forth verdicts by the Election Commission of Pakistan (ECP) and Peshawar High Court (PHC). Gohar was elected the PTI chairman for the first time in Dec 2 election.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>   Prior to that, the PTI held elections in June 2022, which the ECP had annulled on Nov 23, terming them “highly objectionable”.
                                        </p>
                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="sm-1">
                                        &#9670;   Israel has accepted truce proposal
                                    </div>
                                    <h3 className='sm-2'>Israel has “more or less accepted” a proposal for a six-week ceasefire in the Gaza Strip, a US official said on Saturday as Palestinian negotiators were expected in Cairo.</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span> The US official told reporters that “there’s a framework deal” for a ceasefire which “the Israelis have more or less accepted”.


                                        </p>
                                        <h3 className='sm-2'>“Right now, the ball is in the camp of Hamas.”</h3>
                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="sm-1">
                                        &#9670;    Punjab, Balochistan lead in costly food
                                    </div>
                                    <h3 className='sm-2'>Punjab and Balochistan are the two most expensive provinces in terms of the gap between actual and prices fixed by district administration of essential food items, according to the Pakistan Bureau of Statistics (PBS).</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>  PBS has ranked the provinces in terms of the gap between the market prices and those set by district administrations. The exercise is aimed at highlighting issues of governance in controlling the prices.
                                            <br />
                                            <br />

                                            <span className='up'>&#9632;</span>  Put differently, the rankings reflect the performance of various chief secretaries, who serve as the administrative heads of provinces.
                                        </p>
                                    </div>
                                </div>

                                <div className="ag-content_box">
                                    <div className="sm-1">
                                        &#9670;     HBL PSL 2024
                                    </div>
                                    <h3 className='sm-2'>Heavy rain marred the start of Rawalpindi leg of the HBL Pakistan Super League here on Saturday as both the matches were abandoned without a ball being bowled.</h3>
                                    <div className="ag-content_descr">
                                        <p>
                                            <span className='up'>&#9632;</span>   Defending champions Lahore Qalandars, led by Shaheen Shah Afridi, were scheduled to face Babar Azam-captained Peshawar Zalmi in the day game whi­ch was to be followed by a night clash between Shadab Khan’s Islamabad United and Rilee Rossouw-skip­pered Quetta Gladiators.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>   However, a heavy downpour which left the Pindi Cricket Stad­ium soggy made any action impossible resulting in both the games getting called off, and all the four teams were given a point each. Rain had prevented teams from holding any training session on Friday too.
                                        </p>
                                        <p>
                                            <span className='up'>&#9632;</span>    Rain continued throughout the day with intervals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FluidBlocks;
