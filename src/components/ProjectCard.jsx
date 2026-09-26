import { useState } from 'react'

const GITHUB_PATH =
  'M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.15c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.94 10.94 0 0 1 12 8.15c.97 0 1.94.13 2.85.38 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.12 3.06.73.81 1.17 1.84 1.17 3.1 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.04.77 2.1v3.12c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z'

const COLLAPSED_TECH_COUNT = 4

/**
 * Dark developer card for a single project.
 *
 * Uses only the project data that already exists in src/components/Projects.jsx:
 * number, title, subtitle, description (array of paragraphs), technologies,
 * github and (optionally) live.
 */
function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  const technologies = project.technologies ?? []
  const paragraphs = project.description ?? []
  const [lead, ...rest] = paragraphs
  const hasMoreParagraphs = rest.length > 0

  const hiddenTechCount = Math.max(technologies.length - COLLAPSED_TECH_COUNT, 0)
  const visibleTechnologies = expanded
    ? technologies
    : technologies.slice(0, COLLAPSED_TECH_COUNT)

  const detailsId = `project-details-${project.number}`

  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <article className="project-card flex h-full flex-col p-6 md:p-7">

      {/* HEADER — title, short summary, repository link */}
      <div className="flex items-start justify-between gap-4">

        <div className="min-w-0">
          <span className="project-card__index">
            {project.category ? `${project.number} · ${project.category}` : project.number}
          </span>

          <h3 className="project-card__title">{project.title}</h3>

          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${project.title} repository on GitHub`}
            className="project-card__icon"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d={GITHUB_PATH} />
            </svg>
          </a>
        )}

      </div>


      {/* DESCRIPTION — short lead paragraph in the card, the rest behind View details */}
      <div className="project-card__body mt-5">
        {lead && <p>{lead}</p>}

        {hasMoreParagraphs && (
          <div id={detailsId} hidden={!expanded}>
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>


      {/* TECHNOLOGIES */}
      {technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {visibleTechnologies.map((technology) => (
            <span key={technology} className="project-card__pill">
              {technology}
            </span>
          ))}

          {hiddenTechCount > 0 && !expanded && (
            <button
              type="button"
              onClick={toggleExpanded}
              aria-expanded={expanded}
              aria-controls={detailsId}
              aria-label={`Show all ${technologies.length} technologies`}
              className="project-card__pill project-card__pill--more"
            >
              +{hiddenTechCount}
            </button>
          )}
        </div>
      )}


      {/* FOOTER — divider plus actions */}
      <div className="mt-auto pt-6">
        <div className="project-card__divider" />

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">

          {/* Primary action — reveals the remaining description in place */}
          {hasMoreParagraphs && (
            <button
              type="button"
              onClick={toggleExpanded}
              aria-expanded={expanded}
              aria-controls={detailsId}
              className="project-card__action project-card__action--primary"
            >
              {expanded ? 'Hide details' : 'View details'}
              <span aria-hidden="true">{expanded ? '↑' : '↗'}</span>
            </button>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__action"
            >
              Code
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__action"
            >
              Live demo
              <span aria-hidden="true">↗</span>
            </a>
          )}

        </div>
      </div>

    </article>
  )
}

export default ProjectCard
