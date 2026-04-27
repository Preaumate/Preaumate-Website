export default {
  name: 'qaQuestion',
  title: 'Q&A Question',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'askedBy',
      title: 'Asked By',
      type: 'string',
      description: 'Name or "Anonymous"'
    },
    {
      name: 'askedAt',
      title: 'Date Asked',
      type: 'datetime',
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Leave empty until you have answered this question'
    },
    {
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Only published Q&As appear on the website',
      initialValue: false
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Robotic Automation', value: 'robotic-automation' },
          { title: 'IoT Integration', value: 'iot-integration' },
          { title: 'Smart Factory', value: 'smart-factory' },
          { title: 'Predictive Analytics', value: 'predictive-analytics' },
          { title: 'General', value: 'general' },
        ]
      }
    }
  ]
}