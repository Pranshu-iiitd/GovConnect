import random

def get_bot_response(user_query, scheme_data):
    # Basic keyword match logic
    user_query = user_query.lower()
    matches = []

    for scheme in scheme_data:
        keywords = scheme.get("keywords", [])
        if any(keyword in user_query for keyword in keywords):
            matches.append(f"📌 **{scheme['name']}**\n{scheme['description']}\n[Apply here]({scheme['link']})")

    if matches:
        return "\n\n".join(matches)
    else:
        return random.choice([
            "Try specifying the industry or license you're asking about.",
            "I'm still learning — try rephrasing your question.",
            "No direct match found, but you can check the MSME portal or visit https://msme.gov.in."
        ])
