import type { ContentData } from './types';

export const contentData: ContentData = {
    "page_id": "scribr_pitch",
    "sections": [
        {
            "id": "vision",
            "bg_style": "bg-vision",
            "left_label": "00. The Vision",
            "heading": "SCRIBR: The OS for the Hybrid Subscription Economy",
            "blocks": [
                {
                    "type": "vision_hero",
                    "title": "The Big Picture",
                    "body": "A unified orchestration layer to Discover, Subscribe, Control, Pay, and Retain. We are unifying digital services and the massive unorganized sector into one seamless platform.",
                    "image_url": "/phone-app.png"
                }
            ]
        },
        {
            "id": "problem",
            "bg_style": "bg-problem",
            "left_label": "01. The Problem",
            "heading": "The Problem: Deep Rooted Disconnect",
            "blocks": [
                {
                    "type": "text",
                    "title": "For Customers",
                    "body": "There is no unified home for recurring expenses. Streaming apps live in different applications, SaaS in bank statements, and the milkman in memory—forcing people to juggle screenshots, calls, and guesswork instead of having a single, simple view of “who gets paid every month and why.”"
                },
                {
                    "type": "text",
                    "title": "For Merchants",
                    "body": "Merchants—online and offline—don’t truly own their recurring revenue. Digital brands bleed margin and data to intermediaries, while physical vendors lack the tools to even structure subscriptions, leaving both sides blind, leaky, and unable to design, control, or scale their customers."
                }
            ]
        },
        {
            "id": "solution",
            "bg_style": "bg-solution",
            "left_label": "02. The Solution",
            "heading": "The Solution: A Unified Command Center",
            "blocks": [
                {
                    "type": "text",
                    "title": "1. Total Visibility",
                    "subtitle": "One screen for your real life",
                    "body": "All your recurring spends live in one place: YouTube Premium, Netflix, and Prime right next to your daily milk delivery, car wash, maid, tutor, newspaper, etc. No more hunting through apps, emails, SMS, and memory. One dashboard answers: “Who am I paying every month, and how much?”"
                },
                {
                    "type": "text",
                    "title": "2. One-Tap Control",
                    "subtitle": "Change without friction",
                    "body": "From that same screen, you can act instantly: Pause your newspaper when you go on vacation, increase milk for a week when guests are in town, or cancel an unused gym membership. All without awkward calls, negotiation, or digging through random settings."
                },
                {
                    "type": 'text',
                    "title": "3. Smart Payments",
                    "subtitle": "Calm, predictable money flow",
                    "body": "Your digital and physical services are billed in a smarter, consolidated way. Grouped billing (weekly / monthly) instead of 17 random dates. Reminders before renewals and due dates. Optional auto-pay for trusted services. Less bill shock, fewer late fees, and a much lighter mental load."
                }
            ]
        },
        {
            "id": "platform",
            "bg_style": "bg-solution", 
            "left_label": "03. Platform Capabilities",
            "heading": "Platform Capabilities",
            "is_tabbed": true,
            "capabilities": [
                {
                    "title": "Consumer App",
                    "subtitle": "Your 'Recurring Life' Companion",
                    "features": [
                        {
                            "head": "Discover & Onboard",
                            "desc": "Find every subscription you have or you want—from Spotify to a nearby tiffin service, car wash guy, milk vendor, etc.—and add them just like you’d add a Netflix subscription."
                        },
                        {
                            "head": "Manage in One Place",
                            "desc": "See all your recurring services (digital + physical) on one screen; pause, modify, or cancel with a tap."
                        },
                        {
                            "head": "Smart Calendar Sync",
                            "desc": "Going out of town? The app reads your 'Vacation' events and suggests: 'Pause milk, car wash, and maid from 10–15 June?'"
                        }
                    ],
                    "why_matters": "The consumer doesn’t have to remember 20 small recurring things. The app becomes the single place to see, control, and automate everyday services around their actual life schedule."
                },
                {
                    "title": "Merchant SaaS",
                    "subtitle": "Shopify-Lite for Service Vendors",
                    "features": [
                        {
                            "head": "Create Simple Plans",
                            "desc": "Turn your customer into a recurring customer: '5-Day Tiffin (Mon–Fri)', 'Weekend Car Wash', or 'Daily Milk – 1L per day'."
                        },
                        {
                            "head": "Track Service & Delivery",
                            "desc": "Mark who got tiffin today, who paused. Note extra items like '+1 packet curd' or '+2 rotis' for accurate billing."
                        },
                        {
                            "head": "Automate Billing",
                            "desc": "End of month: one-click invoice or payment link. Auto-reminders for late payments. See who is regular and who is churning."
                        }
                    ],
                    "why_matters": "Vendors move from notebooks, memory, and missed payments to a light, modern subscription system. They get predictable revenue, less leakage, and look 'professional' to customers."
                },
                {
                    "title": "Discovery Engine",
                    "subtitle": "One Place to Find All Subscriptions",
                    "features": [
                        {
                            "head": "Search by Need",
                            "desc": "'Music for workouts' shows Spotify & local Zumba. 'Daily food' shows Zomato/Swiggy One & nearby tiffin centers."
                        },
                        {
                            "head": "Blend of Digital + Local",
                            "desc": "See Spotify, Netflix, ChatGPT alongside tiffin, car wash, maid, milk. Everything added as a 'subscription' into the same dashboard."
                        },
                        {
                            "head": "One-Tap Subscribe",
                            "desc": "Choose a plan (digital or local) → confirm → it appears in your Consumer App with billing + control (pause / modify / cancel)."
                        }
                    ],
                    "why_matters": "A unified discovery layer for subscriptions – from global tech apps to local, subscription-based services in your neighbourhood."
                }
            ]
        },
        {
            "id": "market",
            "bg_style": "bg-market",
            "left_label": "04. Market Analysis",
            "heading": "Market Analysis & Potential",
            "blocks": [
                {
                    "type": "market_funnel",
                    "slides": [
                        {
                            "title": "Consumers",
                            "rings": [
                                {"id": "tam", "label": "TAM", "value": "$911M", "full_form": "Total Addressable Market"},
                                {"id": "sam", "label": "SAM", "value": "$347M", "full_form": "Serviceable Available Market"},
                                {"id": "som", "label": "SOM", "value": "$4.3M", "full_form": "Serviceable Obtainable Market"}
                            ],
                            "quotes": [
                                {
                                    "text": "UPI crossed 420M unique users in India by early 2025, reflecting widespread adoption across all socioeconomic groups.",
                                    "source": "CoinLaw: UPI Statistics 2025"
                                },
                                {
                                    "text": "The market size for subscription businesses in India is expected to reach ₹36,000 crore by 2025.",
                                    "source": "Decentro Blog, Aug 2024"
                                }
                            ]
                        },
                        {
                            "title": "Merchants",
                            "rings": [
                                {"id": "tam", "label": "TAM", "value": "$1.8B", "full_form": "Total Addressable Market"},
                                {"id": "sam", "label": "SAM", "value": "$520M", "full_form": "Serviceable Available Market"},
                                {"id": "som", "label": "SOM", "value": "$11.2M", "full_form": "Serviceable Obtainable Market"}
                            ],
                            "quotes": [
                                {
                                    "text": "As of May 2025, 6.44 crore MSMEs are registered on Udyam Registration Portal.",
                                    "source": "IBEF MSME Sector Report"
                                },
                                {
                                    "text": "73% of MSMEs report business growth via digital adoption, led by UPI and smartphones.",
                                    "source": "Economic Times – Digital Adoption"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "revenue",
            "bg_style": "bg-revenue",
            "left_label": "05. Revenue",
            "heading": "Possible Revenue Streams",
            "blocks": [
                {
                    "type": "text",
                    "title": "Consumer Platform Fee",
                    "body": "₹5 per subscription for every renewal processed through the platform."
                },
                {
                    "type": "text",
                    "title": "Merchant SaaS",
                    "body": "Annual ₹12,000 SaaS billing & analytics fee for merchants after reaching visibility of 300 users."
                },
                {
                    "type": "text",
                    "title": "Consumer Premium",
                    "body": "Optional premium tier at ₹360/year for advanced insights and credit analytics."
                }
            ]
        },
        {
            "id": "competitors",
            "bg_style": "bg-competitors",
            "left_label": "06. Competitors",
            "heading": "Competitive Landscape",
            "blocks": [
                {
                    "type": "spider_graph",
                    "title": "",
                    "labels": ["Unified Dashboard", "Mandate Controls", "Sub Discovery", "Recurring Billing", "Merch Marketplace", "FIU Analytics"],
                    "datasets": [
                        {
                            "label": "SCRIBR",
                            "data": [5, 5, 5, 5, 5, 5],
                            "borderColor": "#ff3333",
                            "backgroundColor": "rgba(255, 51, 51, 0.25)",
                            "borderWidth": 3,
                            "pointBackgroundColor": "#ff3333",
                            "fill": true
                        },
                        {
                            "label": "Select a Competitor",
                            "data": [0, 0, 0, 0, 0, 0],
                            "borderColor": "#666",
                            "backgroundColor": "rgba(100, 100, 100, 0.1)",
                            "borderWidth": 2,
                            "pointBackgroundColor": "#666",
                            "borderDash": [5, 5],
                            "fill": true
                        }
                    ],
                    "competitors": [
                        {"name": "Cred / Fold", "desc": "Strong on dashboard & discovery, weak on merchant tools.", "data": [3, 1, 1, 1, 1, 2]},
                        {"name": "Razorpay / Juspay", "desc": "Payment infrastructure giants. Zero consumer interface.", "data": [1, 4, 1, 5, 1, 1]},
                        {"name": "Paytm / PhonePe", "desc": "Generic UPI apps. Good for mandates, bad for management.", "data": [3, 5, 2, 2, 1, 1]},
                        {"name": "Justdial", "desc": "Legacy discovery. No payments or subscription management.", "data": [1, 1, 1, 1, 5, 1]},
                        {"name": "Perfios / FinBox", "desc": "Backend analytics only. No consumer or merchant UI.", "data": [1, 1, 1, 3, 1, 5]}
                    ]
                }
            ]
        },
        {
            "id": "annexure",
            "bg_style": "bg-annexure",
            "left_label": "07. Annexure",
            "heading": "Annexure",
            "sub_sections": [
                {
                    "id": "annexure-paths",
                    "title": "7.1 Regulatory & Partner Paths",
                    "blocks": [
                        {
                            "type": "partnership_table",
                            "title": "",
                            "rows": [
                                {
                                    "capability": "FIU (via SEBI RIA) + Sahamati",
                                    "ownership": "OWNED",
                                    "importance": "Legal basis to pull consented data of user accounts and cards, ensures trust and compliance.",
                                    "companies": "Own"
                                },
                                {
                                    "capability": "Account Aggregators",
                                    "ownership": "PARTNERED",
                                    "importance": "Discovery (transactions → recurring detection).",
                                    "companies": "Anumati, CAMSfinserv, Finvu, OneMoney"
                                },
                                {
                                    "capability": "TPAP/PSP (@scribr)",
                                    "ownership": "PARTNERED",
                                    "importance": "To provide payment control (pause/cancel) to the user by user switching payment methods.",
                                    "companies": "Razorpay, Viyona"
                                },
                                {
                                    "capability": "Payment Gateway + Aggregator",
                                    "ownership": "PARTNERED",
                                    "importance": "Mandate creation on cards/UPI, handling settlements, splits for non-Scribr merchants.",
                                    "companies": "Razorpay, CashFree"
                                },
                                {
                                    "capability": "PPI Wallet Issuer",
                                    "ownership": "PARTNERED",
                                    "importance": "Handling hyperlocal payments, wallet payouts & auto-adjustments without Scribr holding float.",
                                    "companies": "SBM/M2P"
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "annexure-flows",
                    "title": "7.2 Ecosystem User Flows",
                    "blocks": [
                        {
                            "type": "text",
                            "title": "",
                            "body": "<div style=\"text-align: center; margin-bottom: 1.5rem;\"><div style=\"font-size: 1.1rem; font-weight: 600; margin-bottom: 0.75rem;\">Click nodes to expand the detailed workflows.</div><div style=\"font-size: 0.9rem; color: #5e5b55; display: flex; justify-content: center; align-items: center; gap: 20px;\"><span style=\"display: flex; align-items: center; gap: 8px;\"><span style=\"display:inline-block; width:12px; height:12px; background-color:#d02020; border-radius:50%;\"></span><strong>Solid Red</strong> = Expandable</span><span style=\"opacity: 0.3;\">|</span><span style=\"display: flex; align-items: center; gap: 8px;\"><span style=\"display:inline-block; width:12px; height:12px; background-color:#fff; border: 2px solid #d02020; border-radius:50%;\"></span><strong>White (Red Border)</strong> = Final Step</span></div><div style=\"font-size: 0.8rem; color: #888; margin-top: 0.5rem;\">Hover over any node to see the use-case details.</div></div>"
                        },
                        {
                            "type": "d3_tree",
                            "title": "A. User Flow: The Command Center",
                            "tree_id": "user-flow-tree",
                            "data": {
                                "name": "User App",
                                "description": "The central command center for managing all recurring life expenses.",
                                "children": [
                                    {
                                        "name": "1. Connect & Detect",
                                        "description": "Securely link financial accounts to automatically find existing subscriptions.",
                                        "children": [
                                            {"name": "Login", "description": "Secure authentication via Mobile OTP or Social Login."},
                                            {"name": "Link Accounts", "description": "Connect Bank Accounts, Credit Cards, and UPI Apps via AA Framework.", "children": [{"name": "Bank/Cards", "description": "Pull transaction history to identify recurring patterns."}, {"name": "UPI Apps", "description": "Identify existing mandates and recurring UPI instructions."}]},
                                            {"name": "Auto-Scan", "description": "AI algorithms analyze history to flag potential subscriptions.", "children": [{"name": "Digital Subs", "description": "Detects Netflix, Spotify, AWS, etc."}, {"name": "Offline Subs", "description": "Detects recurring payments to Milk vendors, Gyms, etc."}]}
                                        ]
                                    },
                                    {
                                        "name": "2. Unified Dashboard",
                                        "description": "A single view of all active subscriptions and upcoming liabilities.",
                                        "children": [
                                            {"name": "Active List", "description": "See everything you are subscribed to in one scrollable list."},
                                            {"name": "Smart Calendar", "description": "Visual timeline of upcoming due dates and renewal amounts."},
                                            {"name": "Alerts", "description": "Notifications for price hikes, expiring trials, or double charges.", "children": [{"name": "Price Hikes", "description": "Alert: Netflix increased price by ₹100."}]}
                                        ]
                                    },
                                    {
                                        "name": "3. Add Service",
                                        "description": "Discover and subscribe to new services directly from the app.",
                                        "children": [
                                            {"name": "Local Market", "description": "Find hyperlocal vendors like tiffin services or maids nearby.", "children": [{"name": "Search", "description": "Search by category: 'Daily Milk', 'Tiffin'."}, {"name": "Select Plan", "description": "Choose frequency: Daily, Weekly, Monthly."}, {"name": "Subscribe", "description": "One-tap activation with auto-pay setup."}]},
                                            {"name": "Global Apps", "description": "Connect and manage global SaaS and OTT subscriptions.", "children": [{"name": "Search", "description": "Find apps like Spotify, Adobe, ChatGPT."}, {"name": "Connect", "description": "Link existing account or start a new plan."}]}
                                        ]
                                    },
                                    {
                                        "name": "4. Daily Control",
                                        "description": "Manage active services on the fly without calling vendors.",
                                        "children": [
                                            {"name": "Vacation Mode", "description": "Pause physical deliveries while you are away.", "children": [{"name": "Pause Service", "description": "Tap to pause. Merchant is instantly notified to skip delivery.", "children": [{"name": "Syncs to Merchant", "description": "Updates merchant's daily delivery route automatically."}]}]},
                                            {"name": "Cancel", "description": "Stop unwanted subscriptions instantly.", "children": [{"name": "One-Tap Stop", "description": "Revokes the payment mandate immediately."}]}
                                        ]
                                    },
                                    {
                                        "name": "5. Auto-Payment",
                                        "description": "Hassle-free bill payments from a single source.",
                                        "children": [
                                            {"name": "Consolidated Bill", "description": "One aggregate bill for all selected services."},
                                            {"name": "Auto-Pay", "description": "Automatic deduction from wallet or linked bank account."},
                                            {"name": "Success", "description": "Instant notification and invoice generation."}
                                        ]
                                    }
                                ]
                            }
                        },
                        {
                            "type": "d3_tree",
                            "title": "B. Merchant Flow: Automated Operations",
                            "tree_id": "merchant-flow-tree",
                            "data": {
                                "name": "Merchant App",
                                "description": "Tools for local vendors to manage subscriptions and revenue.",
                                "children": [
                                    {
                                        "name": "1. Go Digital",
                                        "description": "Set up a digital business profile and offering.",
                                        "children": [
                                            {"name": "Verify", "description": "KYC and Business verification to accept digital payments."},
                                            {"name": "Create Plan", "description": "Define what you sell and how you bill.", "children": [{"name": "Define Service", "description": "e.g., 'Daily Buffalo Milk' (1L)."}, {"name": "Set Price", "description": "e.g., ₹70 per packet, billed monthly."}]},
                                            {"name": "Get QR", "description": "Generate a unique QR code for customers to scan and subscribe."}
                                        ]
                                    },
                                    {
                                        "name": "2. Acquire",
                                        "description": "Onboard new customers seamlessly.",
                                        "children": [
                                            {"name": "Scan QR", "description": "Customer scans your QR to view plans."},
                                            {"name": "Onboard", "description": "Instant customer addition with verified details."},
                                            {"name": "Active", "description": "Subscription starts, and auto-pay is enabled."}
                                        ]
                                    },
                                    {
                                        "name": "3. Daily Ops",
                                        "description": "Manage day-to-day deliveries and exceptions.",
                                        "children": [
                                            {"name": "Delivery List", "description": "See exactly who needs what today."},
                                            {"name": "Check Route", "description": "Optimized list of active deliveries.", "children": [{"name": "Skip Paused", "description": "System auto-hides customers who are on 'Vacation Mode'."}]},
                                            {"name": "Log Extras", "description": "Add ad-hoc items to a customer's daily log.", "children": [{"name": "Add Item", "description": "e.g., '+1 Packet Curd' added to today's entry."}]}
                                        ]
                                    },
                                    {
                                        "name": "4. Revenue",
                                        "description": "Automated billing and settlement.",
                                        "children": [
                                            {"name": "Calculate", "description": "System computes: (Days Delivered * Rate) + Extras."},
                                            {"name": "Auto-Collect", "description": "Automatically debits customer's wallet on the billing date.", "children": [{"name": "Debit Wallet", "description": "Funds moved from User to Platform."}]},
                                            {"name": "Settlement", "description": "Platform transfers net funds to Merchant's bank.", "children": [{"name": "Bank Deposit", "description": "Money hits the bank account T+1 day."}]}
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
