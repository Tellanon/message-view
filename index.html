<script>
  async function loadMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const recordId = urlParams.get("response_id");

    if (!recordId) {
      document.getElementById("messageBox").innerText = "No message ID found.";
      return;
    }

    try {
      const response = await fetch("https://api.airtable.com/v0/appn6Nd3NlUTEDi8w/Table%201/" + recordId, {
        headers: {
          Authorization: "Bearer patwf5smDtqn0SUJN.3ba2889dbd3495effa838f8535fa722133c69812a86496983ff2f1301516ae3b"
        },
      });
      const data = await response.json();

      // Try pulling from both possible fields
      const message = data.fields["Message"] || data.fields["Message ID"];
      if (message) {
        document.getElementById("messageBox").innerText = message;
      } else {
        document.getElementById("messageBox").innerText = "Message not found.";
      }
    } catch (error) {
      document.getElementById("messageBox").innerText = "There was an error retrieving your message.";
      console.error("Fetch error:", error);
    }
  }

  loadMessage();
</script>
