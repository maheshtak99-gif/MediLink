"use client";

import React, { useEffect, useState } from "react";

export default function HubspotHider() {
  const [isOpen, setIsOpen] = useState(false);
  const [widgetPosition, setWidgetPosition] = useState({ bottom: 0, right: 0, width: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // Check for the HubSpot iframe periodically
    const checkHubspot = () => {
      const container = document.getElementById("hubspot-messages-iframe-container");
      const iframe = container?.querySelector("iframe");
      
      if (iframe && container) {
        // If the iframe height is large, the chat is open
        const rect = iframe.getBoundingClientRect();
        if (rect.height > 200) {
          setIsOpen(true);
          
          // Calculate exact position to place the cover
          // HubSpot branding is usually at the very bottom, ~35px tall
          const windowHeight = window.innerHeight;
          const windowWidth = window.innerWidth;
          
          setWidgetPosition({
            bottom: windowHeight - rect.bottom, // Distance from bottom of screen
            right: windowWidth - rect.right,    // Distance from right of screen
            width: rect.width,                  // Width of the chat widget
          });
        } else {
          setIsOpen(false);
        }
      }
    };

    // Run interval to constantly monitor chat state (since users can open/close anytime)
    interval = setInterval(checkHubspot, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: "fixed",
        bottom: `${widgetPosition.bottom + 2}px`, // Slight offset to ensure it covers
        right: `${widgetPosition.right}px`,
        width: `${widgetPosition.width}px`,
        height: "40px", // Height of the HubSpot branding text area
        backgroundColor: "#ffffff", // Standard HubSpot chat background color
        zIndex: 2147483647, // Max z-index to sit above the iframe
        pointerEvents: "none", // Let clicks pass through if needed
      }}
      aria-hidden="true"
    />
  );
}
