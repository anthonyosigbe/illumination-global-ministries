import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string(),
        "cta_primary": z.string(),
        "cta_secondary": z.string(),
        "service_note": z.string()
      }),
      "mission": z.object({
        "eyebrow": z.string(),
        "pull_quote": z.string(),
        "body": z.string(),
        "cta": z.string()
      }),
      "ministries": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string(),
          "description": z.string()
        }))
      }),
      "services": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subtext": z.string(),
        "times": z.array(z.object({
          "id": z.string(),
          "day": z.string(),
          "time": z.string(),
          "label": z.string()
        }))
      }),
      "prayer": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "cta": z.string()
      }),
      "give": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "cta_note": z.string(),
        "cta": z.string()
      })
    }),
    about: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "calling": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body1": z.string(),
        "body2": z.string()
      }),
      "pastor": z.object({
        "eyebrow": z.string(),
        "name": z.string(),
        "role": z.string(),
        "summary": z.string()
      }),
      "story": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "paragraphs": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "timeline": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "date": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "birth": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string()
      }),
      "heart": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "cta": z.string(),
        "tagline": z.string()
      })
    }),
    events: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "services": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subtext": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "day": z.string(),
          "time": z.string(),
          "label": z.string(),
          "description": z.string(),
          "type": z.string()
        }))
      }),
      "watch": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "cta": z.string(),
        "note": z.string()
      }),
      "upcoming": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "date": z.string(),
          "day": z.string(),
          "time": z.string(),
          "title": z.string(),
          "description": z.string(),
          "tag": z.string()
        }))
      }),
      "location": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "address": z.string(),
        "city": z.string(),
        "phone": z.string(),
        "email": z.string(),
        "note": z.string(),
        "cta": z.string()
      })
    }),
    prayer: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "intro": z.object({
        "quote": z.string(),
        "reference": z.string()
      }),
      "form": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "fields": z.object({
          "name": z.string(),
          "email": z.string(),
          "prayerType": z.string(),
          "prayerTypeOptions": z.array(z.string()),
          "request": z.string(),
          "private": z.string(),
          "submit": z.string(),
          "sending": z.string(),
          "success": z.string(),
          "successBody": z.string()
        })
      }),
      "connect": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "email": z.string(),
        "watchCta": z.string(),
        "aboutCta": z.string()
      })
    }),
    give: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "why": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "scripture": z.string(),
        "reference": z.string()
      }),
      "areas": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "icon": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "ways": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "note": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "description": z.string(),
          "status": z.string(),
          "cta": z.string()
        }))
      }),
      "cta": z.object({
        "headline": z.string(),
        "body": z.string(),
        "button": z.string(),
        "secondary": z.string()
      })
    }),
    teachings: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "intro": z.object({
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "series": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string(),
        "message_count": z.string(),
        "date": z.string(),
        "tag": z.string()
      })),
      "recent": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "series": z.string(),
          "date": z.string(),
          "duration": z.string(),
          "scripture": z.string(),
          "description": z.string(),
          "video_url": z.string(),
          "audio_url": z.string()
        }))
      }),
      "cta": z.object({
        "headline": z.string(),
        "subheadline": z.string(),
        "primary_label": z.string(),
        "primary_href": z.string(),
        "secondary_label": z.string(),
        "secondary_href": z.string()
      })
    }),
    watch_live: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "subheadline": z.string()
      }),
      "stream": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "offline_headline": z.string(),
        "offline_body": z.string(),
        "youtube_note": z.string(),
        "channel_label": z.string(),
        "channel_url": z.string(),
        "chat_label": z.string(),
        "subscribe_label": z.string()
      }),
      "services": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "day": z.string(),
          "time": z.string(),
          "label": z.string(),
          "description": z.string(),
          "live": z.boolean()
        }))
      }),
      "howto": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "step": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "prayer": z.object({
        "eyebrow": z.string(),
        "headline": z.string(),
        "body": z.string(),
        "cta_primary": z.string(),
        "cta_secondary": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;